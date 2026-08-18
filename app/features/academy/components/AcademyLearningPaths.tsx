const learningPaths = [
  {
    title: "GrowthPilot Growth Framework",
    description:
      "Understand the methodology that powers the GrowthPilot ecosystem.",
    level: "Level 1",
  },
  {
    title: "Business Growth Strategy",
    description:
      "Develop practical capabilities for strategic and sustainable growth.",
    level: "Level 2",
  },
  {
    title: "GrowthPilot One",
    description:
      "Learn how to use the unified GrowthPilot experience effectively.",
    level: "Level 3",
  },
  {
    title: "Executive Intelligence",
    description:
      "Strengthen executive decision-making through intelligent business insights.",
    level: "Level 4",
  },
  {
    title: "GrowthPilot Products",
    description:
      "Develop practical capability across GrowthPilot products and workflows.",
    level: "Level 5",
  },
];

export function AcademyLearningPaths() {
  return (
    <section>
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-slate-900">
          Learning Paths
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Structured learning journeys for intelligent business growth.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {learningPaths.map((path) => (
          <article
            key={path.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
              {path.level}
            </span>

            <h3 className="mt-3 text-lg font-semibold text-slate-900">
              {path.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {path.description}
            </p>

            <button
              type="button"
              className="mt-5 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
            >
              Explore Path →
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}