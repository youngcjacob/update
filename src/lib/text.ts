export function extractKeywords(text: string, max: number = 8): string[] {
	const cleaned = text
		.toLowerCase()
		.replace(/https?:\/\/\S+/g, " ")
		.replace(/[^a-z0-9\s']/g, " ")
		.replace(/\s+/g, " ")
		.trim();

	const stop = new Set([
		"the","a","an","and","or","but","if","then","else","for","on","in","to","of","by","with","is","are","was","were","be","been","it","this","that","those","these","i","me","my","you","your","we","our","they","their","as","at","from","about","into","over","after","before","how","what","why","when","where","who","whom","which","do","does","did","doing","done","can","could","should","would","will","may","might","also","just","like","so","not","no","yes","up","down","out","new","use","using","used","via","vs","than","more","less","most","least"
	]);

	const counts = new Map<string, number>();
	for (const token of cleaned.split(" ")) {
		if (!token || stop.has(token) || token.length < 3) continue;
		counts.set(token, (counts.get(token) ?? 0) + 1);
	}

	return [...counts.entries()]
		.sort((a, b) => b[1] - a[1])
		.slice(0, max)
		.map(([word]) => word);
}

export function titleFromKeywords(keywords: string[]): string {
	if (keywords.length === 0) return "Miscellaneous";
	const capitalized = keywords.slice(0, 3).map((k) => k[0].toUpperCase() + k.slice(1));
	return capitalized.join(" · ");
}

export function cosineSimilarity(a: Record<string, number>, b: Record<string, number>): number {
	let dot = 0;
	let normA = 0;
	let normB = 0;
	for (const key of new Set([...Object.keys(a), ...Object.keys(b)])) {
		const va = a[key] ?? 0;
		const vb = b[key] ?? 0;
		dot += va * vb;
		normA += va * va;
		normB += vb * vb;
	}
	return normA && normB ? dot / (Math.sqrt(normA) * Math.sqrt(normB)) : 0;
}

export function keywordWeights(keywords: string[]): Record<string, number> {
	const weights: Record<string, number> = {};
	for (const [idx, key] of keywords.entries()) {
		weights[key] = (weights[key] ?? 0) + (keywords.length - idx);
	}
	return weights;
}

