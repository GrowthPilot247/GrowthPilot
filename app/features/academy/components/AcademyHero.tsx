export function AcademyHero() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="max-w-3xl">
        <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
          GrowthPilot Academy
        </span>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Learn. Apply. Measure. Grow.
        </h1>

        <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
          Build the knowledge, skills, and capabilities required to grow
          businesses intelligently through the GrowthPilot Growth Framework.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            className="rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            Explore Courses
          </button>

          <button
            type="button"
            className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            Take Growth Assessment
          </button>
        </div>
      </div>
    </section>
  );
}