"use client";

import { BrainCircuit } from "lucide-react";

export interface CopilotHeaderProps {
  title: string;
  subtitle: string;
  updated: string;
}

export function CopilotHeader({
  title,
  subtitle,
  updated,
}: CopilotHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
          <BrainCircuit className="h-4 w-4 text-emerald-300" />
          Executive Copilot
        </div>

        <h1 className="mt-5 text-4xl font-bold text-white">
          {title}
        </h1>

        <p className="mt-2 text-slate-300">
          {subtitle}
        </p>
      </div>

      <div className="hidden rounded-full bg-emerald-500/20 px-4 py-2 text-sm lg:flex lg:items-center lg:gap-2">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        LIVE • {updated}
      </div>
    </div>
  );
}