import { Button } from "@/app/components/ui/Button";

export default function GPDSLabPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950">
        <div className="mx-auto max-w-7xl px-8 py-12">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-300">
                GrowthPilot
              </p>

              <h1 className="mt-2 text-4xl font-bold text-white">
                Design System
              </h1>

              <p className="mt-3 max-w-2xl text-slate-300">
                Internal component library for the GrowthPilot Business
                Operating System. Every reusable component is verified here
                before being promoted into production.
              </p>
            </div>

            <div className="rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2">
              <span className="text-sm font-medium text-blue-200">
                GPDS v1.0
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-7xl space-y-10 px-8 py-10">
        {/* Foundations */}
        <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">
            Foundations
          </h2>

          <p className="mt-2 text-muted-foreground">
            Core design tokens that define the GrowthPilot visual language.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <FoundationCard
              title="🎨 Colors"
              description="Brand colors, semantic colors and status palette."
            />

            <FoundationCard
              title="🔤 Typography"
              description="Heading, body and display text styles."
            />

            <FoundationCard
              title="📏 Spacing"
              description="Spacing scale, radius and layout rhythm."
            />
          </div>
        </section>

        {/* Components */}
        <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">
            Components
          </h2>

          <p className="mt-2 text-muted-foreground">
            Production-ready reusable UI components.
          </p>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="mb-4 text-lg font-semibold">
                Button
              </h3>

              <div className="flex flex-wrap gap-4">
                <Button>
                  Primary Button
                </Button>

                <Button variant="secondary">
                  Secondary
                </Button>

                <Button variant="outline">
                  Outline
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard */}
        <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">
            Executive Dashboard Components
          </h2>

          <p className="mt-2 text-muted-foreground">
            Components used throughout the Executive Dashboard.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <StatusCard title="StatCard" />

            <StatusCard title="Widget" />

            <StatusCard title="WidgetHeader" />

            <StatusCard title="DashboardGrid" />
          </div>
        </section>

        {/* Coming Soon */}
        <section className="rounded-2xl border border-dashed border-border p-8">
          <h2 className="text-2xl font-semibold">
            Coming Soon
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <ComingSoonCard title="Aurora Hero" />

            <ComingSoonCard title="Executive Brief" />

            <ComingSoonCard title="Industry Lens" />
          </div>
        </section>
      </div>
    </main>
  );
}

function FoundationCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-border p-6">
      <h3 className="font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

function StatusCard({
  title,
}: {
  title: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-muted/40 p-6">
      <div className="text-lg font-semibold">
        {title}
      </div>

      <div className="mt-2 text-sm text-emerald-600">
        ✓ Registered
      </div>
    </div>
  );
}

function ComingSoonCard({
  title,
}: {
  title: string;
}) {
  return (
    <div className="rounded-xl border border-dashed border-border p-6">
      <h3 className="font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        Planned for the next Engineering Work Package.
      </p>
    </div>
  );
}