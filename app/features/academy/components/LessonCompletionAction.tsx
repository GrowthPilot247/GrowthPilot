"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Loader2,
} from "lucide-react";

import { markLessonComplete } from "../services/progressService";

interface LessonCompletionActionProps {
  learnerId: string;
  courseId: string;
  lessonId: string;
  totalLessons: number;
  initiallyCompleted?: boolean;
  onCompleted?: (
    percentage: number,
    courseCompleted: boolean,
  ) => void;
}

export function LessonCompletionAction({
  learnerId,
  courseId,
  lessonId,
  totalLessons,
  initiallyCompleted = false,
  onCompleted,
}: LessonCompletionActionProps) {
  const [completed, setCompleted] =
    useState(initiallyCompleted);

  const [isLoading, setIsLoading] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  async function handleComplete() {
    if (completed || isLoading) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = markLessonComplete({
        learnerId,
        courseId,
        lessonId,
        totalLessons,
      });

      setCompleted(true);

      onCompleted?.(
        result.progress.percentage,
        result.courseCompleted,
      );
    } catch {
      setError(
        "Unable to save your lesson progress. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  if (completed) {
    return (
      <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600">
        <CheckCircle2 className="h-5 w-5" />
        Lesson completed
      </div>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleComplete}
        disabled={isLoading}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-emerald-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Saving progress...
          </>
        ) : (
          <>
            <CheckCircle2 className="h-4 w-4" />
            Mark Lesson Complete
          </>
        )}
      </button>

      {error && (
        <p className="mt-2 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}