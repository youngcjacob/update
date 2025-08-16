import prisma from "@/lib/prisma";

// Minimal research stub: for now, synthesize notes from thoughts.
export async function runResearchForCluster(clusterId: string) {
	const cluster = await prisma.cluster.findUnique({
		where: { id: clusterId },
		include: { thoughts: true },
	});
	if (!cluster) return;

	const combined = cluster.thoughts.map((t) => `• ${t.content}`).join("\n");
	await prisma.researchNote.create({
		data: {
			clusterId,
			title: `Synthesized notes for ${cluster.title}`,
			summary: `Auto-collected notes derived from your thoughts (${cluster.thoughts.length} items).`,
			content: combined,
		},
	});
}

