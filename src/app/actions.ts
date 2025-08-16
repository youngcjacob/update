"use server";

import prisma from "@/lib/prisma";
import { addThoughtAndCluster, listClustersWithThoughts } from "@/lib/clustering";
import { runResearchForCluster } from "@/lib/research";
import { generateReportForCluster } from "@/lib/report";
import { askGPTAboutVariable, getCommonTopics, getTopicSummaries } from "@/lib/gpt";

export async function actionAddThought(formData: FormData) {
	const content = String(formData.get("content") ?? "").trim();
	if (!content) return { ok: false, error: "Empty" } as const;
	const result = await addThoughtAndCluster(content);

	// Fire-and-forget background tasks: research then generate a fresh report
	setTimeout(() => {
		(async () => {
			try {
				await runResearchForCluster(result.clusterId);
				await generateReportForCluster(result.clusterId);
			} catch (err) {
				console.error("background research/report failed", err);
			}
		})();
	}, 0);

	return { ok: true, ...result } as const;
}

export async function actionListClusters() {
	const clusters = await listClustersWithThoughts();
	return clusters;
}

export async function actionRunResearch(clusterId: string) {
	await runResearchForCluster(clusterId);
	return { ok: true } as const;
}

export async function actionGenerateReport(clusterId: string) {
	const report = await generateReportForCluster(clusterId);
	return { ok: true, report } as const;
}

export async function actionGetReports(clusterId: string) {
	const reports = await prisma.report.findMany({ where: { clusterId }, orderBy: { createdAt: "desc" } });
	return reports;
}

export async function actionAskGPT(formData: FormData) {
	const variable = String(formData.get("content") ?? "").trim();
	if (!variable) return { ok: false, error: "Empty" } as const;
	
	// Step 1: Get common topics
	const topics = await getCommonTopics(variable);
	console.log(`\n=== GPT Response for "${variable}" ===`);
	console.log("Step 1 - Topics:");
	console.log(topics);
	
	// Step 2: Get summaries for those topics
	const summaries = await getTopicSummaries(topics);
	console.log("\nStep 2 - Summaries:");
	console.log(summaries);
	console.log("================================\n");
	
	// Combine topics and summaries for storage
	const combinedContent = `**${variable}**:\n\n**Topics:**\n${topics}\n\n**Summaries:**\n${summaries}`;
	
	// Add it as a thought for clustering
	const result = await addThoughtAndCluster(combinedContent);

	// Fire-and-forget background tasks: research then generate a fresh report
	setTimeout(() => {
		(async () => {
			try {
				await runResearchForCluster(result.clusterId);
				await generateReportForCluster(result.clusterId);
			} catch (err) {
				console.error("background research/report failed", err);
			}
		})();
	}, 0);

	return { ok: true, topics, summaries, ...result } as const;
}

export async function actionDeleteThought(thoughtId: string) {
	try {
		await prisma.thought.delete({
			where: { id: thoughtId },
		});
		return { ok: true } as const;
	} catch (error) {
		console.error('Error deleting thought:', error);
		return { ok: false, error: 'Failed to delete thought' } as const;
	}
}

export async function actionDeleteCluster(clusterId: string) {
	try {
		// Delete all related data in the correct order
		await prisma.report.deleteMany({
			where: { clusterId },
		});
		await prisma.researchNote.deleteMany({
			where: { clusterId },
		});
		await prisma.thought.deleteMany({
			where: { clusterId },
		});
		await prisma.cluster.delete({
			where: { id: clusterId },
		});
		return { ok: true } as const;
	} catch (error) {
		console.error('Error deleting cluster:', error);
		return { ok: false, error: 'Failed to delete cluster' } as const;
	}
}

export async function actionDeleteReport(reportId: string) {
	try {
		await prisma.report.delete({
			where: { id: reportId },
		});
		return { ok: true } as const;
	} catch (error) {
		console.error('Error deleting report:', error);
		return { ok: false, error: 'Failed to delete report' } as const;
	}
}

export async function actionDeleteResearchNote(noteId: string) {
	try {
		await prisma.researchNote.delete({
			where: { id: noteId },
		});
		return { ok: true } as const;
	} catch (error) {
		console.error('Error deleting research note:', error);
		return { ok: false, error: 'Failed to delete research note' } as const;
	}
}

