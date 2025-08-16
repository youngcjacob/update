import { actionListClusters } from '../actions';

export default async function TestEnvPage() {
  console.log('🔍 TestEnvPage - Environment check:', {
    NODE_ENV: process.env.NODE_ENV,
    HAS_DATABASE_URL: !!process.env.DATABASE_URL,
    DATABASE_URL_START: process.env.DATABASE_URL?.substring(0, 20) + '...',
    HAS_OPENAI_KEY: !!process.env.OPENAI_API_KEY
  });

  let testResult = 'Testing...';
  
  try {
    await actionListClusters();
    testResult = '✅ Environment variables are working! Database connection successful.';
  } catch (error) {
    testResult = `❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Environment Test</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Environment Variables Status:</h2>
          <div className="space-y-2 text-sm">
            <div>NODE_ENV: <span className="font-mono">{process.env.NODE_ENV || 'Not set'}</span></div>
            <div>DATABASE_URL: <span className="font-mono">{process.env.DATABASE_URL ? '✅ Set' : '❌ Not set'}</span></div>
            <div>OPENAI_API_KEY: <span className="font-mono">{process.env.OPENAI_API_KEY ? '✅ Set' : '❌ Not set'}</span></div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Database Connection Test:</h2>
          <p className="text-gray-700">{testResult}</p>
        </div>

        <div className="mt-6">
          <a href="/" className="text-blue-600 hover:text-blue-800 underline">
            ← Back to main app
          </a>
        </div>
      </div>
    </div>
  );
}
