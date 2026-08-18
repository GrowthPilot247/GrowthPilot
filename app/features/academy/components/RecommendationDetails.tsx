"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Target,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

import { AIRecommendation } from "../types/recommendation";

interface RecommendationDetailsProps {
  recommendation: AIRecommendation;
  actionHref: string;
  actionLabel?: string;
}

export function RecommendationDetails({
  recommendation,
  actionHref,
  actionLabel = "Start Course",
}: RecommendationDetailsProps) {
  const [showReasons, setShowReasons] =
    useState(false);

  return (
    <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="p-6 sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
                AI Recommended
              </span>

              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                {recommendation.growthDimension}
              </span>

              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                {recommendation.priority} Priority
              </span>
            </div>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-950">
              {recommendation.courseTitle}
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {recommendation.summary}
            </p>
          </div>

          <div className="flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-full border-8 border-emerald-50 bg-white shadow-sm">
            <span className="text-2xl font-bold text-emerald-600">
              {recommendation.relevanceScore}%
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              relevance
            </span>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <InsightCard
            icon={Target}
            title="Why you're seeing this"
            description={
              recommendation.recommendationReason
            }
          />

          {recommendation.identifiedChallenge && (
            <InsightCard
              icon={BriefcaseBusiness}
              title="Business challenge"
              description={
                recommendation.identifiedChallenge
              }
            />
          )}

          {recommendation.expectedCapabilityImprovement && (
            <InsightCard
              icon={TrendingUp}
              title="Expected capability improvement"
              description={
                recommendation.expectedCapabilityImprovement
              }
            />
          )}

          {recommendation.businessImpact && (
            <InsightCard
              icon={Lightbulb}
              title="Potential business impact"
              description={
                recommendation.businessImpact
              }
            />
          )}
        </div>

        {recommendation.reasons.length > 0 && (
          <div className="mt-6 border-t border-slate-200 pt-5">
            <button
              type="button"
              onClick={() =>
                setShowReasons(
                  (current) => !current,
                )
              }
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Recommendation signals
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  See what contributed to this recommendation.
                </p>
              </div>

              {showReasons ? (
                <ChevronUp className="h-5 w-5 text-slate-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-slate-400" />
              )}
            </button>

            {showReasons && (
              <div className="mt-4 space-y-3">
                {recommendation.reasons.map(
                  (reason) => (
                    <div
                      key={`${reason.source}-${reason.title}`}
                      className="flex items-start gap-3 rounded-xl bg-slate-50 p-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />

                      <div className="min-w-0">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                          <p className="text-sm font-semibold text-slate-800">
                            {reason.title}
                          </p>

                          <span className="text-[11px] font-medium text-slate-400">
                            {reason.source}
                          </span>
                        </div>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {reason.explanation}
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            )}
          </div>
        )}

        <div className="mt-7 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Recommendation source
            </p>

            <p className="mt-1 text-sm font-semibold text-slate-700">
              {recommendation.source}
            </p>
          </div>

          <a
            href={actionHref}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md"
          >
            {actionLabel}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function InsightCard({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Target;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm">
        <Icon className="h-4 w-4" />
      </div>

      <h3 className="mt-4 text-sm font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {description}
      </p>
    </div>
  );
}