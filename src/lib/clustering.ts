import prisma from "@/lib/prisma";
import { extractKeywords, keywordWeights, cosineSimilarity, titleFromKeywords } from "@/lib/text";

const SIMILARITY_THRESHOLD = 0.28;

export async function addThoughtAndCluster(content: string) {
	console.log('🔍 addThoughtAndCluster called with content length:', content.length);
	try {
		console.log('🔄 Using Prisma client...');
		console.log('✅ Prisma client ready');
		
		console.log('🔄 Extracting keywords...');
		const keywords = extractKeywords(content);
		console.log('✅ Keywords extracted:', keywords);

		console.log('🔄 Finding similar clusters...');
		const existingClusters = await prisma.cluster.findMany({
			include: { thoughts: true },
		});
		console.log('✅ Found', existingClusters.length, 'existing clusters');

		let targetCluster = existingClusters.find((cluster: any) => {
			const clusterKeywords = cluster.keywords as Record<string, number>;
			const currentKeywordWeights = keywordWeights(keywords);
			const similarity = cosineSimilarity(currentKeywordWeights, clusterKeywords);
			console.log('🔍 Similarity with cluster', cluster.title, ':', similarity);
			return similarity > SIMILARITY_THRESHOLD;
		});

		if (targetCluster) {
			console.log('✅ Found similar cluster:', targetCluster.title);
		} else {
			console.log('🔄 Creating new cluster...');
			const title = titleFromKeywords(keywords);
			console.log('📝 New cluster title:', title);
			
			targetCluster = await prisma.cluster.create({
				data: {
					id: crypto.randomUUID(),
					title,
					keywords: keywordWeights(keywords),
					summary: content.substring(0, 200) + (content.length > 200 ? '...' : ''),
				},
				include: { thoughts: true },
			});
			console.log('✅ New cluster created:', targetCluster.id);
		}

		console.log('🔄 Adding thought to cluster...');
		const thought = await prisma.thought.create({
			data: {
				id: crypto.randomUUID(),
				content,
				clusterId: targetCluster.id,
			},
		});
		console.log('✅ Thought created:', thought.id);

		console.log('✅ Database operations completed');

		return { clusterId: targetCluster.id, thoughtId: thought.id };
	} catch (error) {
		console.error('❌ Error in addThoughtAndCluster:', error);
		console.error('❌ Error details:', {
			name: error instanceof Error ? error.name : 'Unknown',
			message: error instanceof Error ? error.message : 'Unknown error',
			stack: error instanceof Error ? error.stack : 'No stack trace'
		});
		
		// Check for specific database errors
		if (error instanceof Error) {
			if (error.message.includes('ENOENT') || error.message.includes('SQLITE_CANTOPEN')) {
				console.log('⚠️ Database file not found - this is expected on Vercel. Throwing error to be handled by caller.');
				throw new Error('Database not available. This app requires a cloud database to store data.');
			}
			if (error.message.includes('connect')) {
				console.log('⚠️ Database connection failed - this is expected on Vercel. Throwing error to be handled by caller.');
				throw new Error('Database not available. This app requires a cloud database to store data.');
			}
		}
		
		throw error;
	}
}

export async function listClustersWithThoughts() {
	console.log('🔍 listClustersWithThoughts called');
	try {
		console.log('🔄 Using Prisma client...');
		console.log('✅ Prisma client ready');
		
		console.log('🔄 Fetching clusters with relations...');
		const clusters = await prisma.cluster.findMany({
			include: {
				thoughts: true,
				reports: true,
				researchNotes: true,
			},
			orderBy: {
				createdAt: 'desc',
			},
		});
		console.log('✅ Clusters fetched:', clusters.length);
		
		console.log('✅ Database operations completed');
		
		return clusters;
	} catch (error) {
		console.error('❌ Error in listClustersWithThoughts:', error);
		console.error('❌ Error details:', {
			name: error instanceof Error ? error.name : 'Unknown',
			message: error instanceof Error ? error.message : 'Unknown error',
			stack: error instanceof Error ? error.stack : 'No stack trace'
		});
		
		// Check for specific database errors
		if (error instanceof Error) {
			if (error.message.includes('ENOENT') || error.message.includes('SQLITE_CANTOPEN')) {
				console.log('⚠️ Database file not found - this is expected on Vercel. Returning empty array.');
				return [];
			}
			if (error.message.includes('connect')) {
				console.log('⚠️ Database connection failed - this is expected on Vercel. Returning empty array.');
				return [];
			}
		}
		
		// For any other error, return empty array instead of throwing
		console.log('⚠️ Unknown database error - returning empty array.');
		return [];
	}
}

