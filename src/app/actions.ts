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
	console.log('🔍 actionListClusters called');
	console.log('🔍 Environment check:', {
		NODE_ENV: process.env.NODE_ENV,
		HAS_DATABASE_URL: !!process.env.DATABASE_URL,
		DATABASE_URL_START: process.env.DATABASE_URL?.substring(0, 20) + '...',
		HAS_OPENAI_KEY: !!process.env.OPENAI_API_KEY
	});
	
	try {
		console.log('🔄 Attempting to fetch clusters...');
		const clusters = await listClustersWithThoughts();
		console.log('✅ Clusters fetched successfully:', clusters?.length || 0, 'clusters');
		return clusters;
	} catch (error) {
		console.error('❌ Error in actionListClusters:', error);
		console.error('❌ Error details:', {
			name: error instanceof Error ? error.name : 'Unknown',
			message: error instanceof Error ? error.message : 'Unknown error',
			stack: error instanceof Error ? error.stack : 'No stack trace'
		});
		
		// Check if it's a database connection error
		if (error instanceof Error && error.message.includes('connect')) {
			throw new Error('Database connection failed. Please check your database configuration.');
		}
		
		throw new Error(`Failed to load clusters: ${error instanceof Error ? error.message : 'Unknown error'}`);
	}
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
	console.log('🔍 actionAskGPT called');
	console.log('🔍 Environment check:', {
		NODE_ENV: process.env.NODE_ENV,
		HAS_DATABASE_URL: !!process.env.DATABASE_URL,
		DATABASE_URL_START: process.env.DATABASE_URL?.substring(0, 20) + '...',
		HAS_OPENAI_KEY: !!process.env.OPENAI_API_KEY
	});
	
	try {
		const content = formData.get('content') as string;
		console.log('📝 Content received:', content);
		
		if (!content || content.trim() === '') {
			console.log('❌ Empty content provided');
			return { ok: false, error: 'Please enter a query' };
		}

		console.log('🔄 Calling GPT functions...');
		const topics = await getCommonTopics(content);
		console.log('✅ Topics received:', topics);
		
		const summaries = await getTopicSummaries(topics);
		console.log('✅ Summaries received:', summaries);

		const gptResponse = `**${content}**:\n\n**Topics:**\n${topics}\n\n**Summaries:**\n${summaries}`;
		console.log('📝 Final GPT response:', gptResponse);

		console.log('🔄 Adding thought to database...');
		await addThoughtAndCluster(gptResponse);
		console.log('✅ Thought added successfully');

		return { ok: true };
	} catch (error) {
		console.error('❌ Error in actionAskGPT:', error);
		console.error('❌ Error details:', {
			name: error instanceof Error ? error.name : 'Unknown',
			message: error instanceof Error ? error.message : 'Unknown error',
			stack: error instanceof Error ? error.stack : 'No stack trace'
		});
		
		// Check if it's a database error
		if (error instanceof Error && (error.message.includes('ENOENT') || error.message.includes('SQLITE_CANTOPEN') || error.message.includes('connect'))) {
			console.log('⚠️ Database error - this is expected on Vercel without a cloud database');
			return { ok: false, error: 'Database not available. This app requires a cloud database to store data.' };
		}
		
		return { ok: false, error: error instanceof Error ? error.message : 'Unknown error occurred' };
	}
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

