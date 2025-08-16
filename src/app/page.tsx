"use client";

import { useEffect, useState, useTransition } from "react";
import ReactMarkdown from "react-markdown";
import {
	actionAddThought,
	actionAskGPT,
	actionListClusters,
	actionRunResearch,
	actionGenerateReport,
	actionDeleteThought,
	actionDeleteCluster,
	actionDeleteReport,
	actionDeleteResearchNote,
} from "@/app/actions";

export default function Home() {
	const [clusters, setClusters] = useState<any[]>([]);
	const [isPending, startTransition] = useTransition();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		console.log('🚀 Home component mounted');
		refresh();
	}, []);

	// Add form submission handler for debugging
	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		console.log('📝 Form submit event triggered');
		console.log('📝 Form element:', e.currentTarget);
		console.log('📝 Form data:', new FormData(e.currentTarget));
	};

	function refresh() {
		setIsLoading(true);
		setError(null);
		startTransition(async () => {
			try {
				const data = await actionListClusters();
				setClusters(data || []);
			} catch (error) {
				console.error('Error loading clusters:', error);
				setError('Failed to load data. Please try again.');
				setClusters([]);
			} finally {
				setIsLoading(false);
			}
		});
	}

	async function onAskGPT(formData: FormData) {
		try {
			await actionAskGPT(formData);
			(refresh as any)();
		} catch (error) {
			console.error('Error submitting form:', error);
			setError('Failed to submit query. Please try again.');
		}
	}

	async function handleDeleteThought(thoughtId: string) {
		try {
			await actionDeleteThought(thoughtId);
			refresh();
		} catch (error) {
			console.error('Error deleting thought:', error);
			setError('Failed to delete thought. Please try again.');
		}
	}

	async function handleDeleteCluster(clusterId: string) {
		try {
			await actionDeleteCluster(clusterId);
			refresh();
		} catch (error) {
			console.error('Error deleting cluster:', error);
			setError('Failed to delete cluster. Please try again.');
		}
	}

	async function handleDeleteReport(reportId: string) {
		try {
			await actionDeleteReport(reportId);
			refresh();
		} catch (error) {
			console.error('Error deleting report:', error);
			setError('Failed to delete report. Please try again.');
		}
	}

	async function handleDeleteResearchNote(noteId: string) {
		try {
			await actionDeleteResearchNote(noteId);
			refresh();
		} catch (error) {
			console.error('Error deleting research note:', error);
			setError('Failed to delete research note. Please try again.');
		}
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-4 sm:px-6 py-6 sm:py-10 mx-auto max-w-5xl">
			<h1 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 text-slate-800 text-center">Focus Researcher</h1>
			
			{error && (
				<div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
					{error}
					<button 
						onClick={() => setError(null)}
						className="ml-2 text-red-500 hover:text-red-700"
					>
						×
					</button>
				</div>
			)}

			<form action={onAskGPT} onSubmit={handleFormSubmit} className="mb-6 sm:mb-8 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">
				<input
					name="content"
					placeholder="Ask GPT about a variable or concept…"
					className="border-2 border-slate-200 rounded-xl px-4 py-3 text-base sm:text-lg focus:border-blue-500 focus:outline-none transition-colors shadow-sm"
				/>
				<button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl px-6 py-3 font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto">
					Add
				</button>
			</form>

			{isLoading ? (
				<div className="text-center py-8">
					<div className="text-slate-600">Loading...</div>
				</div>
			) : clusters.length === 0 ? (
				<div className="text-center py-8">
					<div className="text-slate-600">No clusters yet. Try asking GPT about something!</div>
				</div>
			) : (
				<div className="space-y-4 sm:space-y-6">
					{clusters.map((c) => (
						<div key={c.id} className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
							<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
								<h2 className="text-lg sm:text-xl font-semibold text-slate-800">{c.title}</h2>
								<div className="flex flex-wrap gap-2 sm:gap-3">
									<button
										className="text-xs sm:text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg px-3 sm:px-4 py-2 font-medium transition-colors flex-1 sm:flex-none"
										onClick={async () => {
											try {
												await actionRunResearch(c.id);
												refresh();
											} catch (error) {
												console.error('Error running research:', error);
												setError('Failed to run research. Please try again.');
											}
										}}
									>
										Research
									</button>
									<button
										className="text-xs sm:text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg px-3 sm:px-4 py-2 font-medium transition-colors flex-1 sm:flex-none"
										onClick={async () => {
											try {
												await actionGenerateReport(c.id);
												refresh();
											} catch (error) {
												console.error('Error generating report:', error);
												setError('Failed to generate report. Please try again.');
											}
										}}
									>
										Generate report
									</button>
									<button
										className="text-xs sm:text-sm bg-red-50 hover:bg-red-100 text-red-600 rounded-lg px-3 sm:px-4 py-2 font-medium transition-colors flex-1 sm:flex-none"
										onClick={() => handleDeleteCluster(c.id)}
									>
										Delete cluster
									</button>
								</div>
							</div>
							<ul className="space-y-3 mb-4">
								{c.thoughts?.map((t: any) => (
									<li key={t.id} className="flex flex-col sm:flex-row sm:items-start justify-between group bg-slate-50 rounded-xl p-3 sm:p-4 hover:bg-slate-100 transition-colors">
										<div className="flex-1 mb-3 sm:mb-0">
											<ReactMarkdown 
												components={{
													p: ({children}) => <p className="mb-2 text-slate-700 leading-relaxed text-sm sm:text-base">{children}</p>,
													ul: ({children}) => <ul className="list-disc list-inside ml-4 mb-2 space-y-1">{children}</ul>,
													li: ({children}) => <li className="text-slate-600 text-sm sm:text-base">{children}</li>,
												}}
											>
												{t.content}
											</ReactMarkdown>
										</div>
										<button
											className="text-xs bg-red-100 hover:bg-red-200 text-red-600 px-3 py-1 rounded-lg font-medium transition-colors opacity-100 sm:opacity-0 group-hover:opacity-100 self-end sm:self-auto"
											onClick={() => handleDeleteThought(t.id)}
										>
											Delete
										</button>
									</li>
								))}
							</ul>
							{c.researchNotes?.length ? (
								<div className="mb-4">
									<div className="font-semibold mb-3 text-slate-800 text-sm sm:text-base">Research Notes</div>
									<div className="space-y-3">
										{c.researchNotes.map((note: any) => (
											<div key={note.id} className="bg-blue-50 border border-blue-200 rounded-xl p-3 sm:p-4">
												<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
													<div className="flex-1">
														<div className="font-medium text-blue-900 text-sm sm:text-base">{note.title || "Research Note"}</div>
														{note.summary && <div className="text-blue-700 mt-1 text-sm">{note.summary}</div>}
													</div>
													<button
														className="text-xs bg-red-100 hover:bg-red-200 text-red-600 px-3 py-1 rounded-lg font-medium transition-colors self-end sm:self-auto"
														onClick={() => handleDeleteResearchNote(note.id)}
													>
														Delete
													</button>
												</div>
											</div>
										))}
									</div>
								</div>
							) : null}
							{c.reports?.length ? (
								<div>
									<div className="font-semibold mb-3 text-slate-800 text-sm sm:text-base">Reports</div>
									<div className="space-y-3">
										{c.reports.map((r: any) => (
											<details key={r.id} className="bg-green-50 border border-green-200 rounded-xl">
												<summary className="cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 hover:bg-green-100 transition-colors gap-2">
													<span className="font-medium text-green-900 text-sm sm:text-base">{new Date(r.createdAt).toLocaleString()}</span>
													<button
														className="text-xs bg-red-100 hover:bg-red-200 text-red-600 px-3 py-1 rounded-lg font-medium transition-colors self-end sm:self-auto"
														onClick={(e) => {
															e.preventDefault();
															handleDeleteReport(r.id);
														}}
													>
														Delete
													</button>
												</summary>
												<div className="p-3 sm:p-4 pt-0">
													<pre className="whitespace-pre-wrap text-green-800 text-xs sm:text-sm leading-relaxed">{r.content}</pre>
												</div>
											</details>
										))}
									</div>
								</div>
							) : null}
						</div>
					))}
				</div>
			)}
		</div>
	);
}
