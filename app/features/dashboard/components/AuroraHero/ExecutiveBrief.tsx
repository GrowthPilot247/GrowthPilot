interface ExecutiveBriefProps {
  executiveBrief: string;
}

export function ExecutiveBrief({
  executiveBrief,
}: ExecutiveBriefProps) {
  return (
    <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
        Executive Brief
      </p>

      <p className="mt-4 text-lg leading-8 text-slate-200">
        {executiveBrief}
      </p>
    </div>
  );
}