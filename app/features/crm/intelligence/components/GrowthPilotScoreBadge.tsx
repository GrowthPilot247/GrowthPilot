"use client";

/**
 * ============================================================
 * GrowthPilot Score Badge
 * ============================================================
 */

import { cn } from "@/app/lib/cn";

interface GrowthPilotScoreBadgeProps {
  score: number;
  grade: "A" | "B" | "C" | "D" | "F";
}

const gradeClasses = {
  A: "bg-emerald-100 text-emerald-700 border-emerald-200",
  B: "bg-blue-100 text-blue-700 border-blue-200",
  C: "bg-amber-100 text-amber-700 border-amber-200",
  D: "bg-orange-100 text-orange-700 border-orange-200",
  F: "bg-red-100 text-red-700 border-red-200",
};

export function GrowthPilotScoreBadge({
  score,
  grade,
}: GrowthPilotScoreBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-4 rounded-2xl border px-5 py-4",
        gradeClasses[grade]
      )}
    >
      <div>
        <p className="text-xs font-medium uppercase tracking-wide opacity-80">
          GrowthPilot Score
        </p>

        <p className="text-3xl font-bold">
          {score}
        </p>
      </div>

      <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-current text-2xl font-bold">
        {grade}
      </div>
    </div>
  );
}