export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <span className="inline-block rounded-full bg-emerald-500/20 px-4 py-1 text-sm font-medium text-emerald-400">
          GrowthPilot v1.0
        </span>

        <h1 className="mt-8 text-5xl font-extrabold tracking-tight md:text-7xl">
          Welcome to <span className="text-emerald-400">GrowthPilot</span>
        </h1>

        <p className="mt-6 text-lg text-slate-300">
          Build smarter. Grow faster. Scale confidently.
        </p>

        <p className="mt-4 text-slate-400">
          The AI-powered business growth platform built for entrepreneurs,
          marketers, agencies, and modern businesses.
        </p>

        <button className="mt-10 rounded-xl bg-emerald-500 px-8 py-4 font-semibold text-slate-950 hover:bg-emerald-400 transition">
          Get Started
        </button>
      </div>
    </section>
  );
}