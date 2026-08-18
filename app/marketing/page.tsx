import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Megaphone,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

const solutions = [
  {
    title: "Growth Strategy",
    description:
      "Build practical growth strategies designed around your business goals, customers, and market opportunities.",
    icon: Target,
  },
  {
    title: "Digital Marketing",
    description:
      "Create stronger digital campaigns across content, advertising, search, social media, and conversion channels.",
    icon: Megaphone,
  },
  {
    title: "AI & Automation",
    description:
      "Use AI-powered workflows and automation to improve productivity, decision-making, and business operations.",
    icon: Bot,
  },
  {
    title: "Growth Analytics",
    description:
      "Turn business and marketing data into useful insights that help you understand performance and identify opportunities.",
    icon: BarChart3,
  },
];

const benefits = [
  "Practical growth strategies",
  "Digital marketing systems",
  "AI-powered business solutions",
  "Automation and operational improvement",
  "Data-driven decision making",
  "Continuous learning and development",
];

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.18),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-emerald-300">
              <Sparkles className="h-4 w-4" />
              Business Growth. Digital Innovation. AI.
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Build smarter.
              <span className="block text-emerald-400">
                Grow faster.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              GrowthPilot helps businesses build stronger growth
              systems through digital marketing, automation,
              artificial intelligence, analytics, and practical
              growth strategies.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/dev/academy"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-400"
              >
                Explore GrowthPilot
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Go to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
            GrowthPilot Platform
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to move your business forward.
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            GrowthPilot brings strategy, technology, marketing,
            learning, and intelligence together in one growth
            ecosystem.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <article
                key={solution.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {solution.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {solution.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Why GrowthPilot */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                A complete growth ecosystem
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Turn ideas into repeatable growth systems.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                GrowthPilot is designed to help entrepreneurs,
                professionals, teams, and organizations understand
                what drives growth and build systems that can scale.
              </p>

              <Link
                href="/dev/academy"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald-700 hover:text-emerald-800"
              >
                Start learning
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <Zap className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    GrowthPilot Advantage
                  </h3>

                  <p className="text-sm text-slate-500">
                    Built around practical execution
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <span className="text-xs">✓</span>
                    </span>

                    <span className="text-sm text-slate-700">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-slate-950 px-6 py-14 text-center sm:px-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to build your next stage of growth?
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              Explore the GrowthPilot ecosystem and turn your
              growth goals into practical action.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-400"
              >
                Enter GrowthPilot
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}