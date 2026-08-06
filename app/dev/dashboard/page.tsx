export default function DashboardLabPage() {
  return (
    <main className="min-h-screen bg-background p-10">
      <div className="mx-auto max-w-7xl space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            Dashboard Lab
          </h1>

          <p className="mt-2 text-muted-foreground">
            Safe environment for building and testing complete dashboard
            experiences before promotion to production.
          </p>
        </div>

        <div className="rounded-2xl border border-dashed border-border p-12 text-center">
          <h2 className="text-2xl font-semibold">
            Aurora Hero will be built here
          </h2>

          <p className="mt-4 text-muted-foreground">
            This lab is isolated from the production dashboard.
          </p>
        </div>
      </div>
    </main>
  );
}