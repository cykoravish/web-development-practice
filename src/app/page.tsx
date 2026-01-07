export default function Home() {
  return (
   <main className="min-h-screen bg-gray-800 flex items-center justify-center px-6">
      <div className="max-w-4xl text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Web Dev Practice LMS 🚀
        </h1>

        <p className="text-lg md:text-xl opacity-90 mb-10">
          Learn web development by building real projects, solving challenges,
          and mastering HTML, CSS, JavaScript, React, and more.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 rounded-full bg-white text-purple-600 font-semibold hover:scale-105 transition">
            Start Learning
          </button>

          <button className="px-8 py-4 rounded-full border-2 border-white font-semibold hover:bg-white hover:text-purple-600 transition">
            View Courses
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold mb-2">🔥 Practice-Based</h3>
            <p className="text-sm opacity-90">
              Learn by doing, not just watching tutorials.
            </p>
          </div>

          <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold mb-2">🧩 Real Projects</h3>
            <p className="text-sm opacity-90">
              Learn javascript with live competitions
            </p>
          </div>

          <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold mb-2">⚡ Modern Stack</h3>
            <p className="text-sm opacity-90">
              Learn React, Next.js, APIs, and best practices.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
