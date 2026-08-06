interface AIStatusBadgeProps {
  status?: "active" | "processing";
  lastUpdated: string;
}

export function AIStatusBadge({
  status = "active",
  lastUpdated,
}: AIStatusBadgeProps) {
  return (
    <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-4 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
          {status === "active" ? "AI Active" : "Processing"}
        </span>
      </div>

      <p className="mt-2 text-sm text-slate-300">
        Last analysis
      </p>

      <p className="text-base font-medium text-white">
        {lastUpdated}
      </p>
    </div>
  );
}