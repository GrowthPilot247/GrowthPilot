"use client";

import { ArrowRight, TrendingUp } from "lucide-react";

export type PipelineStage = {
  id: string;
  stage: string;
  deals: number;
  value: number;
  progress: number;
};

interface SalesPipelineProps {
  stages: PipelineStage[];
}

const progressColors = [
  "bg-blue-500",
  "bg-emerald-500",
  "bg-violet-500",
  "bg-amber-500",
  "bg-green-600",
];

export function SalesPipeline({
  stages,
}: SalesPipelineProps) {
  const totalValue = stages.reduce(
    (sum, stage) => sum + stage.value,
    0
  );

  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-slate-100 p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-blue-100 p-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Sales Pipeline
            </h2>

            <p className="text-sm text-slate-500">
              Total Pipeline Value
            </p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-lg font-bold text-slate-900">
            ${totalValue.toLocaleString()}
          </p>

          <button
            type="button"
            className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-700"
          >
            View Pipeline

            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="space-y-5 p-6">
        {stages.length === 0 ? (
          <div className="py-10 text-center text-sm text-slate-500">
            No pipeline data available.
          </div>
        ) : (
          stages.map((stage, index) => (
            <div key={stage.id}>
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-slate-900">
                    {stage.stage}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {stage.deals} Deals
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-semibold text-slate-900">
                    ${stage.value.toLocaleString()}
                  </p>

                  <p className="text-xs text-slate-400">
                    {stage.progress}%
                  </p>
                </div>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`h-full rounded-full ${
                    progressColors[index % progressColors.length]
                  }`}
                  style={{
                    width: `${stage.progress}%`,
                  }}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}