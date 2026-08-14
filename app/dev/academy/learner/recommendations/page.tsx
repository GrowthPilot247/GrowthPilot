import Link from "next/link";
import {
  ArrowLeft,
  BrainCircuit,
  Sparkles,
} from "lucide-react";

import { RecommendationDetails } from "@/app/features/academy/components/RecommendationDetails";
import { demoLearner } from "@/app/features/academy/data/learner";
import { generateRecommendations } from "@/app/features/academy/services/recommendationService";

export default function AcademyRecommendationsPage() {
  const result =
    generateRecommendations(demoLearner);

  const learnerQuery =
    `?learnerId=${encodeURIComponent(
      demoLearner.id,
    )}&learnerType=${encodeURIComponent(
      demoLearner.learnerType,
    )}`;

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="relative overflow-hidden">
        {/* Background design */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl" />

          <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-cyan-200/20 blur-3xl" />

          <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-5 py-8 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <Link
              href="/dev/academy/learner"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Learner Dashboard
            </Link>

            <div className="mt-7 flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-emerald-400 shadow-sm">
                <BrainCircuit className="h-7 w-7" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
                    <Sparkles className="h-3.5 w-3.5" />
                    AI Learning Intelligence
                  </span>

                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {result.intelligenceSource}
                  </span>
                </div>

                <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Your AI Learning Recommendations
                </h1>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
                  GrowthPilot analyzes your learner profile,
                  learning goals, business context, growth
                  priorities, and course relevance to identify
                  learning opportunities that can strengthen
                  your capabilities.
                </p>
              </div>
            </div>
          </header>

          {/* Intelligence explanation */}
          <section className="mt-6 rounded-3xl bg-slate-950 p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                <BrainCircuit className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  How GrowthPilot Intelligence works
                </p>

                <h2 className="mt-2 text-xl font-bold text-white">
                  Recommendations are built around your development needs
                </h2>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                  {result.contextSummary}
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <SignalCard
                number="01"
                title="Profile"
                description="Role, industry, and learner goals."
              />

              <SignalCard
                number="02"
                title="Business Context"
                description="Challenges and growth priorities."
              />

              <SignalCard
                number="03"
                title="Learning History"
                description="Enrollment and course progress."
              />

              <SignalCard
                number="04"
                title="Course Relevance"
                description="Growth dimensions and course fit."
              />
            </div>
          </section>

          {/* Recommendations */}
          <section className="mt-6">
            {result.recommendations.length > 0 ? (
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                    Personalized Learning
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-slate-950">
                    Recommended for you
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    Each recommendation includes the signals
                    and reasoning behind its relevance.
                  </p>
                </div>

                {result.recommendations.map(
                  (recommendation) => (
                    <RecommendationDetails
                      key={recommendation.id}
                      recommendation={recommendation}
                      actionHref={`/dev/academy/courses/${recommendation.courseId}${learnerQuery}`}
                      actionLabel="View Course"
                    />
                  ),
                )}
              </div>
            ) : (
              <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
                <BrainCircuit className="mx-auto h-10 w-10 text-slate-300" />

                <h2 className="mt-5 text-xl font-bold text-slate-950">
                  No new recommendations yet
                </h2>

                <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
                  Continue learning and updating your Academy
                  profile. GrowthPilot will use your learning
                  history and goals to identify new opportunities.
                </p>

                <Link
                  href="/dev/academy"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-700"
                >
                  Explore Academy
                </Link>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

function SignalCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <span className="text-[11px] font-bold text-emerald-400">
        {number}
      </span>

      <p className="mt-2 text-sm font-semibold text-white">
        {title}
      </p>

      <p className="mt-1 text-xs leading-5 text-slate-500">
        {description}
      </p>
    </div>
  );
}