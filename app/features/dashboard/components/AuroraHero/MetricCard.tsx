interface MetricCardProps {
  label: string;
  value: string;
  accent?: "emerald" | "cyan";
}

export function MetricCard({
  label,
  value,
  accent = "emerald",
}: MetricCardProps) {
  const color =
    accent === "emerald"
      ? "text-emerald-400"
      : "text-cyan-400";

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
      <p className="text-sm text-slate-400">
        {label}
      </p>

      <h3 className={`mt-3 text-4xl font-bold ${color}`}>
        {value}
      </h3>
    </div>
  );
}