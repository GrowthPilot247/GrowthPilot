"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  PlayCircle,
} from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

import {
  createEnrollment,
  getEnrollment,
} from "../services/enrollmentService";

import { LearnerType } from "../types/enrollment";

interface EnrollmentActionProps {
  courseId: string;
  totalLessons: number;
  firstLessonId?: string;
  aiRecommended?: boolean;
  aiRecommendationReason?: string;

  /**
   * Optional learner context.
   *
   * When provided, this takes priority over the legacy
   * aiRecommended-based demo learner selection.
   */
  learnerId?: string;
  learnerType?: LearnerType;
}

export function EnrollmentAction({
  courseId,
  totalLessons,
  firstLessonId,
  aiRecommended = false,
  aiRecommendationReason,
  learnerId: providedLearnerId,
  learnerType: providedLearnerType,
}: EnrollmentActionProps) {
  const searchParams = useSearchParams();

  /*
   * Recommendation flows can pass the learner context through
   * the course URL.
   *
   * Example:
   *
   * ?learnerId=gp-demo-learner-001&learnerType=GrowthPilot%20User
   *
   * Explicit component props take priority over URL values.
   */
  const queryLearnerId =
    searchParams.get("learnerId");

  const queryLearnerType =
    searchParams.get("learnerType");

  const learnerId =
    providedLearnerId ??
    queryLearnerId ??
    (aiRecommended
      ? "gp-demo-learner-001"
      : "external-demo-learner-001");

  const learnerType: LearnerType =
    providedLearnerType ??
    (queryLearnerType ===
    "GrowthPilot User"
      ? "GrowthPilot User"
      : queryLearnerType ===
          "External Learner"
        ? "External Learner"
        : aiRecommended
          ? "GrowthPilot User"
          : "External Learner");

  const existingEnrollment =
    getEnrollment(
      learnerId,
      courseId,
    );

  const [enrolled, setEnrolled] =
    useState(
      existingEnrollment !== undefined &&
        existingEnrollment.enrollmentStatus !==
          "Cancelled",
    );

  const [loading, setLoading] =
    useState(false);

  const handleEnroll = () => {
    setLoading(true);

    createEnrollment({
      learnerId,
      learnerType,
      courseId,
      totalLessons,
      aiRecommended,
      aiRecommendationReason,
    });

    setEnrolled(true);
    setLoading(false);
  };

  if (enrolled) {
    return (
      <div className="space-y-3">
        <div className="flex items-center gap-3 rounded-xl bg-emerald-50 p-4">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />

          <div>
            <p className="text-sm font-semibold text-emerald-900">
              You&apos;re enrolled
            </p>

            <p className="mt-1 text-xs leading-5 text-emerald-700">
              Your course access is now active.
            </p>
          </div>
        </div>

        {firstLessonId ? (
          <Link
            href={`/dev/academy/courses/${courseId}/learn/${firstLessonId}${
              learnerId
                ? `?learnerId=${encodeURIComponent(
                    learnerId,
                  )}`
                : ""
            }`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all hover:bg-emerald-700"
          >
            <PlayCircle className="h-4 w-4" />
            Start Learning
            <ArrowRight className="h-4 w-4" />
          </Link>
        ) : (
          <button
            type="button"
            disabled
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-300 px-5 py-3.5 text-sm font-bold text-slate-600"
          >
            Course Content Coming Soon
          </button>
        )}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={handleEnroll}
      disabled={loading}
      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Enrolling...
        </>
      ) : (
        <>
          Enroll in Course
          <ArrowRight className="h-4 w-4" />
        </>
      )}
    </button>
  );
}