import Link from 'next/link';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-4 sm:px-6 py-6 sm:py-10 mx-auto max-w-5xl">
      <h1 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 text-slate-800 text-center">
        Test Page - Basic Routing Works!
      </h1>
      <div className="text-center">
        <p className="text-slate-600 mb-4">
          If you can see this page, the basic Next.js routing is working correctly.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
        >
          Go back to main page
        </Link>
      </div>
    </div>
  );
}
