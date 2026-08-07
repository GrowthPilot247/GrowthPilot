"use client";

import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Health",
    value: 92,
    fill: "#10b981",
  },
];

export function BusinessHealthGauge() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg">
      <div className="mb-5">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Business Health
        </p>

        <h3 className="mt-1 text-3xl font-bold text-slate-900">
          92/100
        </h3>

        <p className="text-sm text-emerald-600">
          Excellent
        </p>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            innerRadius="70%"
            outerRadius="100%"
            barSize={18}
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />

            <RadialBar
  background
  dataKey="value"
  animationDuration={1800}
/>
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center">
        <div>
          <p className="text-xl font-bold text-emerald-600">96%</p>
          <p className="text-xs text-slate-500">
            Sales
          </p>
        </div>

        <div>
          <p className="text-xl font-bold text-sky-600">91%</p>
          <p className="text-xs text-slate-500">
            Marketing
          </p>
        </div>

        <div>
          <p className="text-xl font-bold text-violet-600">89%</p>
          <p className="text-xs text-slate-500">
            Finance
          </p>
        </div>
      </div>
    </div>
  );
}