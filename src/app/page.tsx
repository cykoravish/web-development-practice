export default function Home() {
  return (
<main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center px-6">
      <div className="max-w-4xl text-center text-gray-100">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          JavaScript Practice LMS ⚡
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-10">
          Master JavaScript by building real projects, solving challenges,
          and learning modern JS the right way.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 rounded-full bg-yellow-400 text-black font-semibold hover:scale-105 hover:shadow-lg transition">
            Start Learning
          </button>

          <button className="px-8 py-4 rounded-full border border-gray-500 text-gray-200 font-semibold hover:bg-gray-800 transition">
            View Roadmap 
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          <div className="bg-gray-800/70 border border-gray-700 rounded-2xl p-6 hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold mb-2 text-yellow-400">
              🔥 Hands-on Practice
            </h3>
            <p className="text-sm text-gray-400">
              Learn JavaScript by writing real code, not just watching videos.
            </p>
          </div>

          <div className="bg-gray-800/70 border border-gray-700 rounded-2xl p-6 hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold mb-2 text-yellow-400">
              🧩 Real Projects
            </h3>
            <p className="text-sm text-gray-400">
              Build projects that strengthen your JS fundamentals.
            </p>
          </div>

          <div className="bg-gray-800/70 border border-gray-700 rounded-2xl p-6 hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold mb-2 text-yellow-400">
              ⚡ Modern JavaScript
            </h3>
            <p className="text-sm text-gray-400">
              Learn ES6+, async JS, DOM manipulation, and best practices. code with me.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
