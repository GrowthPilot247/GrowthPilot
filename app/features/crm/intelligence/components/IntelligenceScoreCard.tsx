"use client";

/**
 * ============================================================
 * GrowthPilot Intelligence Score Card
 * ============================================================
 */

import { cn } from "@/app/lib/cn";

interface IntelligenceScoreCardProps {
  title: string;

  score: number;

  subtitle?: string;

  color?: "green" | "blue" | "amber" | "red";
}

const colorClasses = {
  green: "border-green-200 bg-green-50 text-green-700",

  blue: "border-blue-200 bg-blue-50 text-blue-700",

  amber: "border-amber-200 bg-amber-50 text-amber-700",

  red: "border-red-200 bg-red-50 text-red-700",
};

export function IntelligenceScoreCard({
  title,
  score,
  subtitle,
  color = "green",
}: IntelligenceScoreCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl",
        "border",
        "p-6",
        "shadow-sm",
        "transition-all",
        "duration-200",
        "hover:shadow-md",
        colorClasses[color]
      )}
    >
      <p className="text-sm font-medium opacity-80">
        {title}
      </p>

      <h2 className="mt-3 text-4xl font-bold">
        {score}
      </h2>

      {subtitle && (
        <p className="mt-2 text-sm opacity-80">
          {subtitle}
        </p>
      )}
    </div>
  );
}