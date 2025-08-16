import prisma from "@/lib/prisma";
import { extractKeywords, keywordWeights, cosineSimilarity, titleFromKeywords } from "@/lib/text";

const SIMILARITY_THRESHOLD = 0.28;

export async function addThoughtAndCluster(content: string) {
	const keywords = extractKeywords(content);
	const weights = keywordWeights(keywords);

	const clusters = await prisma.cluster.findMany({});
	let bestClusterId: string | null = null;
	let bestScore = 0;

	for (const cluster of clusters) {
		const clusterWeights = cluster.keywords as Record<string, number>;
		const sim = cosineSimilarity(weights, clusterWeights);
		if (sim > bestScore) {
			bestScore = sim;
			bestClusterId = cluster.id;
		}
	}

	let clusterId = bestClusterId ?? null;
	if (!clusterId || bestScore < SIMILARITY_THRESHOLD) {
		const title = titleFromKeywords(keywords);
		const created = await prisma.cluster.create({
			data: { title, keywords: weights },
		});
		clusterId = created.id;
	} else {
		await prisma.cluster.update({
			where: { id: clusterId },
			data: { updatedAt: new Date() },
		});
	}

	const thought = await prisma.thought.create({
		data: { content, clusterId },
	});

	return { thoughtId: thought.id, clusterId };
}

export async function listClustersWithThoughts() {
	return prisma.cluster.findMany({
		orderBy: { updatedAt: "desc" },
		include: { 
			thoughts: { orderBy: { createdAt: "desc" } }, 
			reports: true,
			researchNotes: { orderBy: { createdAt: "desc" } }
		},
	});
}

