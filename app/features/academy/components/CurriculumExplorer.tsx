"use client";

import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Layers3,
} from "lucide-react";

import {
  academyLearningPaths,
  academyPrograms,
  academySchools,
} from "../data/curriculum";

type ViewMode = "schools" | "programs" | "paths";

export function CurriculumExplorer() {
  const [view, setView] = useState<ViewMode>("schools");

  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
              Academy Curriculum
            </span>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Explore the Business School
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Explore schools, structured programs, and learning paths
              designed around the capabilities required for modern business
              growth.
            </p>
          </div>

          <div className="flex rounded-xl border border-slate-200 bg-slate-50 p-1">
            <button
              type="button"
              onClick={() => setView("schools")}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                view === "schools"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Schools
            </button>

            <button
              type="button"
              onClick={() => setView("programs")}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                view === "programs"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Programs
            </button>

            <button
              type="button"
              onClick={() => setView("paths")}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                view === "paths"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Learning Paths
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        {view === "schools" && (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {academySchools.map((school, index) => (
              <button
                key={school}
                type="button"
                className="group rounded-xl border border-slate-200 p-5 text-left transition-all hover:border-emerald-200 hover:bg-emerald-50/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <GraduationCap className="h-5 w-5" />
                  </div>

                  <span className="text-xs text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-4 font-semibold text-slate-900">
                  {school}
                </h3>

                <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-emerald-600">
                  Explore School
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            ))}
          </div>
        )}

        {view === "programs" && (
          <div className="grid gap-5 md:grid-cols-2">
            {academyPrograms.map((program) => (
              <article
                key={program.id}
                className="rounded-xl border border-slate-200 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <Layers3 className="h-5 w-5" />
                  </div>

                  {program.featured && (
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {program.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {program.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {program.level}
                  </span>

                  {program.growthDimensions.map((dimension) => (
                    <span
                      key={dimension}
                      className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
                    >
                      {dimension}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                >
                  Explore Program
                  <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            ))}
          </div>
        )}

        {view === "paths" && (
          <div className="grid gap-5 md:grid-cols-2">
            {academyLearningPaths.map((path) => (
              <article
                key={path.id}
                className="rounded-xl border border-slate-200 p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                  <BookOpen className="h-5 w-5" />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {path.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {path.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {path.level}
                  </span>

                  {path.growthDimensions.map((dimension) => (
                    <span
                      key={dimension}
                      className="rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700"
                    >
                      {dimension}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                >
                  Explore Path
                  <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}