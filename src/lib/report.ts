import prisma from "@/lib/prisma";

export async function generateReportForCluster(clusterId: string) {
	const cluster = await prisma.cluster.findUnique({
		where: { id: clusterId },
		include: { thoughts: true, researchNotes: true },
	});
	if (!cluster) return null;

	const header = `# ${cluster.title}`;
	const thoughtSection = cluster.thoughts
		.map((t) => `- ${t.content}`)
		.join("\n");
	const researchSection = cluster.researchNotes
		.map((r) => `- ${r.title ?? "Note"}: ${r.summary ?? ""}`)
		.join("\n");

	const content = [
		header,
		"",
		"## Highlights",
		thoughtSection || "(No thoughts yet)",
		"",
		"## Research",
		researchSection || "(No research notes yet)",
	].join("\n");

	const report = await prisma.report.create({ data: { clusterId, content } });
	return report;
}

