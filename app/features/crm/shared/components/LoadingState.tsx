"use client";

interface LoadingStateProps {
  rows?: number;
}

export function LoadingState({
  rows = 5,
}: LoadingStateProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="animate-pulse space-y-4">

        {Array.from({ length: rows }).map((_, index) => (
          <div
            key={index}
            className="h-12 rounded-xl bg-slate-200"
          />
        ))}

      </div>

    </section>
  );
}