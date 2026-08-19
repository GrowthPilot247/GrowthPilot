"use client";

import { use, useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  ArrowLeft,
  Award,
  CheckCircle2,
  Loader2,
  RotateCcw,
} from "lucide-react";

import { AssessmentPlayer } from "@/app/features/academy/components/AssessmentPlayer";
import { demoLearner } from "@/app/features/academy/data/learner";
import {
  getCourseAssessment,
  getLearnerAssessmentAttempts,
  startAssessment,
  submitAssessment,
} from "@/app/features/academy/services/assessmentService";

import type {
  AssessmentAnswer,
  AssessmentAttempt,
  AssessmentResult,
} from "@/app/features/academy/types/assessment";

interface AssessmentPageProps {
  params: Promise<{
    courseId: string;
  }>;
}

interface AssessmentInitialization {
  attempt: AssessmentAttempt | null;
  error: string | null;
}

function initializeAssessmentAttempt(
  courseId: string,
  assessment: ReturnType<typeof getCourseAssessment>,
): AssessmentInitialization {
  if (!assessment) {
    return {
      attempt: null,
      error: null,
    };
  }

  try {
    const existingAttempts =
      getLearnerAssessmentAttempts(
        demoLearner.id,
        assessment.id,
      );

    const activeAttempt =
      [...existingAttempts]
        .reverse()
        .find(
          (existingAttempt) =>
            existingAttempt.status ===
            "In Progress",
        );

    if (activeAttempt) {
      return {
        attempt: activeAttempt,
        error: null,
      };
    }

    const newAttempt = startAssessment(
      demoLearner.id,
      courseId,
    );

    return {
      attempt: newAttempt,
      error: null,
    };
  } catch (caughtError) {
    return {
      attempt: null,
      error:
        caughtError instanceof Error
          ? caughtError.message
          : "Unable to start the assessment.",
    };
  }
}

export default function AssessmentPage({
  params,
}: AssessmentPageProps) {
  const { courseId } = use(params);

  const assessment = getCourseAssessment(courseId);

  const [initialization] =
    useState<AssessmentInitialization>(() =>
      initializeAssessmentAttempt(
        courseId,
        assessment,
      ),
    );

  const [attempt, setAttempt] =
    useState<AssessmentAttempt | null>(
      initialization.attempt,
    );

  const [result, setResult] =
    useState<AssessmentResult | null>(null);

  const [error, setError] =
    useState<string | null>(
      initialization.error,
    );

  const [submitting, setSubmitting] =
    useState(false);

  function handleSubmit(
    answers: AssessmentAnswer[],
  ) {
    setSubmitting(true);
    setError(null);

    try {
      const assessmentResult =
        submitAssessment(
          demoLearner.id,
          courseId,
          answers,
        );

      setResult(assessmentResult);
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Unable to submit the assessment.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  function handleRestart() {
    setResult(null);
    setError(null);

    if (!assessment) {
      setError(
        "Assessment not found for this course.",
      );
      return;
    }

    try {
      const newAttempt = startAssessment(
        demoLearner.id,
        courseId,
      );

      setAttempt(newAttempt);
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Unable to start another assessment attempt.",
      );
    }
  }

  if (!assessment) {
    return (
      <main className="min-h-screen bg-slate-100">
        <div className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6">
          <div className="w-full rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <AlertCircle className="mx-auto h-12 w-12 text-amber-500" />

            <h1 className="mt-5 text-2xl font-bold text-slate-900">
              Assessment Not Available
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              There is currently no assessment configured
              for this course.
            </p>

            <Link
              href={`/dev/academy/courses/${courseId}`}
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Course
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (!attempt && !result) {
    return (
      <main className="min-h-screen bg-slate-100">
        <div className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6">
          <div className="w-full rounded-3xl border border-red-200 bg-white p-10 text-center shadow-sm">
            <AlertCircle className="mx-auto h-12 w-12 text-red-500" />

            <h1 className="mt-5 text-2xl font-bold text-slate-900">
              Unable to Start Assessment
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              {error ??
                "An assessment attempt could not be created."}
            </p>

            <Link
              href={`/dev/academy/courses/${courseId}`}
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Course
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (result) {
    return (
      <main className="min-h-screen bg-slate-100">
        <div className="mx-auto max-w-4xl px-6 py-10 lg:py-14">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="bg-slate-950 px-6 py-10 text-center sm:px-10">
              {result.passed ? (
                <CheckCircle2 className="mx-auto h-16 w-16 text-emerald-400" />
              ) : (
                <AlertCircle className="mx-auto h-16 w-16 text-amber-400" />
              )}

              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-emerald-400">
                Assessment Result
              </p>

              <h1 className="mt-3 text-3xl font-bold text-white">
                {result.passed
                  ? "Assessment Passed"
                  : "Assessment Not Passed"}
              </h1>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                {result.passed
                  ? "Excellent work. You have successfully met the assessment requirement for this course."
                  : "Your current score did not meet the required passing score. Review the course material and try again if another attempt is available."}
              </p>
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-3 sm:p-8">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Score
                </p>

                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {result.score}%
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Correct
                </p>

                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {result.correctAnswers}/
                  {result.totalQuestions}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Passing Score
                </p>

                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {assessment.passingScore}%
                </p>
              </div>
            </div>

            {result.passed && (
              <div className="mx-6 mb-6 flex items-start gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 sm:mx-8 sm:mb-8">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Award className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="font-semibold text-emerald-900">
                    Certification Progress
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-emerald-800">
                    Your assessment has been successfully
                    recorded. Your course completion and
                    certification status can now be processed
                    by the Academy.
                  </p>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-3 border-t border-slate-200 p-6 sm:flex-row sm:justify-center sm:p-8">
              <Link
                href={`/dev/academy/courses/${courseId}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Course
              </Link>

              {!result.passed && (
                <button
                  type="button"
                  onClick={handleRestart}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <RotateCcw className="h-4 w-4" />
                  Try Again
                </button>
              )}

              {result.passed && (
                <Link
                  href="/dev/academy/learner"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
                >
                  View Learning Dashboard
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-5xl px-6 py-8 lg:py-12">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href={`/dev/academy/courses/${courseId}`}
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Course
          </Link>

          {attempt && (
            <div className="text-sm text-slate-500">
              Attempt{" "}
              <span className="font-semibold text-slate-700">
                #{attempt.attemptNumber}
              </span>
            </div>
          )}
        </div>

        {error && (
          <div className="mb-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />

            <div>
              <p className="font-semibold text-red-900">
                Assessment Error
              </p>

              <p className="mt-1 text-sm leading-6 text-red-800">
                {error}
              </p>
            </div>
          </div>
        )}

        {submitting ? (
          <div className="flex min-h-[400px] items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="text-center">
              <Loader2 className="mx-auto h-10 w-10 animate-spin text-emerald-600" />

              <h2 className="mt-4 text-lg font-semibold text-slate-900">
                Scoring your assessment...
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Please wait while GrowthPilot processes your
                answers.
              </p>
            </div>
          </div>
        ) : attempt ? (
          <AssessmentPlayer
            assessment={assessment}
            onSubmit={handleSubmit}
            onExit={() => {
              window.location.href =
                `/dev/academy/courses/${courseId}`;
            }}
          />
        ) : (
          <div className="flex min-h-[400px] items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="text-center">
              <Loader2 className="mx-auto h-10 w-10 animate-spin text-emerald-600" />

              <h2 className="mt-4 text-lg font-semibold text-slate-900">
                Preparing your assessment...
              </h2>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
