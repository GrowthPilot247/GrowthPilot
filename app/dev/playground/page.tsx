export default function PlaygroundPage() {
  return (
    <main className="min-h-screen bg-background p-10">
      <div className="mx-auto max-w-7xl space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            GrowthPilot Playground
          </h1>

          <p className="mt-2 text-muted-foreground">
            Experimental ideas, future concepts and research prototypes.
          </p>
        </div>

        <div className="rounded-2xl border border-dashed border-border p-12 text-center">
          <h2 className="text-2xl font-semibold">
            Innovation Starts Here
          </h2>

          <p className="mt-4 text-muted-foreground">
            Features in this area are experimental and are not promoted
            to production until approved.
          </p>
        </div>
      </div>
    </main>
  );
}