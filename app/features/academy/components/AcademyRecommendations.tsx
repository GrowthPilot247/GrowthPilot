import { Sparkles, ArrowRight } from "lucide-react";

export function AcademyRecommendations() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
            <Sparkles className="h-5 w-5" />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              AI Learning Recommendations
            </h2>

            <p className="text-sm text-slate-500">
              Learning opportunities identified by GrowthPilot AI
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <article className="rounded-xl border border-slate-200 p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                Customer Growth
              </span>

              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                Customer Retention Strategy
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                GrowthPilot identified an opportunity to strengthen customer
                retention capability. This learning experience is recommended
                to help address the identified growth opportunity.
              </p>
            </div>

            <span className="shrink-0 rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
              AI Recommended
            </span>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <div className="text-sm text-slate-500">
              Relevance:{" "}
              <span className="font-semibold text-violet-600">94%</span>
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
            >
              View Course
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}