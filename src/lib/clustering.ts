import prisma from "@/lib/prisma";
import { extractKeywords, keywordWeights, cosineSimilarity, titleFromKeywords } from "@/lib/text";

const SIMILARITY_THRESHOLD = 0.28;

export async function addThoughtAndCluster(content: string) {
	console.log('🔍 addThoughtAndCluster called with content length:', content.length);
	try {
		const keywords = extractKeywords(content);
		const weights = keywordWeights(keywords);
		console.log('📊 Keywords extracted:', keywords);

		const clusters = await prisma.cluster.findMany({});
		console.log('🔍 Found existing clusters:', clusters.length);
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

		console.log('🎯 Best cluster score:', bestScore, 'threshold:', SIMILARITY_THRESHOLD);

		let clusterId = bestClusterId ?? null;
		if (!clusterId || bestScore < SIMILARITY_THRESHOLD) {
			const title = titleFromKeywords(keywords);
			console.log('🆕 Creating new cluster with title:', title);
			const created = await prisma.cluster.create({
				data: { title, keywords: weights },
			});
			clusterId = created.id;
			console.log('✅ New cluster created with ID:', clusterId);
		} else {
			console.log('🔄 Updating existing cluster:', clusterId);
			await prisma.cluster.update({
				where: { id: clusterId },
				data: { updatedAt: new Date() },
			});
		}

		console.log('💭 Creating thought...');
		const thought = await prisma.thought.create({
			data: { content, clusterId },
		});
		console.log('✅ Thought created with ID:', thought.id);

		const result = { thoughtId: thought.id, clusterId };
		console.log('✅ addThoughtAndCluster completed:', result);
		return result;
	} catch (error) {
		console.error('❌ addThoughtAndCluster error:', error);
		throw error;
	}
}

export async function listClustersWithThoughts() {
	console.log('🔍 listClustersWithThoughts called');
	try {
		const result = await prisma.cluster.findMany({
			orderBy: { updatedAt: "desc" },
			include: { 
				thoughts: { orderBy: { createdAt: "desc" } }, 
				reports: true,
				researchNotes: { orderBy: { createdAt: "desc" } }
			},
		});
		console.log('✅ listClustersWithThoughts success:', result.length, 'clusters');
		return result;
	} catch (error) {
		console.error('❌ listClustersWithThoughts error:', error);
		throw error;
	}
}

