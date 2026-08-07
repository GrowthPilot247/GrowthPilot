"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const roiData = [
  {
    name: "Google Ads",
    value: 38,
  },
  {
    name: "LinkedIn",
    value: 27,
  },
  {
    name: "Facebook",
    value: 20,
  },
  {
    name: "Organic",
    value: 15,
  },
];

const COLORS = [
  "#2563eb",
  "#10b981",
  "#f59e0b",
  "#8b5cf6",
];

export function MarketingROI() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Marketing ROI
        </p>

        <h3 className="mt-1 text-3xl font-bold text-slate-900">
          326%
        </h3>

        <p className="text-sm text-emerald-600">
          Overall campaign return
        </p>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={roiData}
              dataKey="value"
              nameKey="name"
              innerRadius={65}
              outerRadius={95}
              paddingAngle={3}
            >
              {roiData.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}