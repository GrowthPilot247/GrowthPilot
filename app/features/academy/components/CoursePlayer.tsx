"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Circle,
  PlayCircle,
} from "lucide-react";
import { useMemo, useState } from "react";

import { LessonCompletionAction } from "./LessonCompletionAction";
import {
  getCourseProgress,
  isLessonComplete,
} from "../services/progressService";

interface Lesson {
  id: string;
  title: string;
  duration?: string;
  preview?: boolean;
}

interface CourseModule {
  id: string;
  title: string;
  description?: string;
  lessons: Lesson[];
}

interface CoursePlayerProps {
  courseId: string;
  courseTitle: string;
  modules: CourseModule[];
  lessonId: string;
  learnerId: string;
}

export function CoursePlayer({
  courseId,
  courseTitle,
  modules,
  lessonId,
  learnerId,
}: CoursePlayerProps) {
  const lessons = useMemo(
    () =>
      modules.flatMap((module) =>
        module.lessons.map((lesson) => ({
          ...lesson,
          moduleId: module.id,
          moduleTitle: module.title,
        })),
      ),
    [modules],
  );

  const currentLessonIndex = lessons.findIndex(
    (lesson) => lesson.id === lessonId,
  );

  const currentLesson =
    currentLessonIndex >= 0
      ? lessons[currentLessonIndex]
      : undefined;

  const totalLessons = lessons.length;

  const initialProgress = getCourseProgress(
    learnerId,
    courseId,
    totalLessons,
  );

  const [completedLessonIds, setCompletedLessonIds] =
    useState<string[]>(
      initialProgress.completedLessonIds ?? [],
    );

  const [percentage, setPercentage] =
    useState(initialProgress.percentage);

  const [courseCompleted, setCourseCompleted] =
    useState(
      initialProgress.completedLessons >=
        totalLessons &&
        totalLessons > 0,
    );

  if (!currentLesson) {
    return (
      <main className="min-h-screen bg-slate-100">
        <div className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6">
          <div className="w-full rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <BookOpen className="mx-auto h-10 w-10 text-slate-400" />

            <h1 className="mt-5 text-2xl font-bold text-slate-900">
              Lesson not found
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              The requested lesson could not be found in this course.
            </p>

            <Link
              href={`/dev/academy/courses/${courseId}`}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Course
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const previousLesson =
    currentLessonIndex > 0
      ? lessons[currentLessonIndex - 1]
      : undefined;

  const nextLesson =
    currentLessonIndex < lessons.length - 1
      ? lessons[currentLessonIndex + 1]
      : undefined;

  const completedCount =
    completedLessonIds.length;

  function handleCompleted(
    updatedPercentage: number,
    completedCourse: boolean,
  ) {
    setCompletedLessonIds((current) =>
      current.includes(currentLesson.id)
        ? current
        : [...current, currentLesson.id],
    );

    setPercentage(updatedPercentage);

    setCourseCompleted(completedCourse);
  }

  function isCompleted(
    lessonIdToCheck: string,
  ) {
    if (
      completedLessonIds.includes(
        lessonIdToCheck,
      )
    ) {
      return true;
    }

    return isLessonComplete(
      learnerId,
      courseId,
      lessonIdToCheck,
      totalLessons,
    );
  }

  return (
    <main className="min-h-screen bg-slate-950">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col">
        <header className="border-b border-white/10 bg-slate-950 px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <Link
              href={`/dev/academy/courses/${courseId}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Course
            </Link>

            <div className="hidden text-right sm:block">
              <p className="text-xs text-slate-500">
                GrowthPilot Academy
              </p>

              <p className="text-sm font-semibold text-white">
                {courseTitle}
              </p>
            </div>
          </div>
        </header>

        <div className="grid flex-1 lg:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="border-b border-white/10 bg-slate-900 lg:border-b-0 lg:border-r">
            <div className="p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <BookOpen className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
                    Course
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    {courseTitle}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate-400">
                      Course Progress
                    </p>

                    <p className="mt-1 text-2xl font-bold text-white">
                      {percentage}%
                    </p>
                  </div>

                  <p className="text-xs text-slate-400">
                    {completedCount} of {totalLessons}
                  </p>
                </div>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-700">
                  <div
                    className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                    style={{
                      width: `${percentage}%`,
                    }}
                  />
                </div>

                <p className="mt-2 text-xs text-slate-500">
                  lessons completed
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 p-4">
              <p className="px-2 pb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Course Content
              </p>

              <div className="space-y-4">
                {modules.map(
                  (module, moduleIndex) => (
                    <div key={module.id}>
                      <div className="px-2">
                        <p className="text-xs font-semibold text-slate-400">
                          Module {moduleIndex + 1}
                        </p>

                        <p className="mt-1 text-sm font-semibold text-slate-200">
                          {module.title}
                        </p>
                      </div>

                      <div className="mt-2 space-y-1">
                        {module.lessons.map(
                          (lesson) => {
                            const active =
                              lesson.id ===
                              lessonId;

                            const completed =
                              isCompleted(
                                lesson.id,
                              );

                            return (
                              <Link
                                key={lesson.id}
                                href={`/dev/academy/courses/${courseId}/learn/${lesson.id}`}
                                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                                  active
                                    ? "bg-emerald-500/10 font-semibold text-emerald-300"
                                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                                }`}
                              >
                                {completed ? (
                                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                                ) : active ? (
                                  <PlayCircle className="h-4 w-4 shrink-0 text-emerald-400" />
                                ) : (
                                  <Circle className="h-4 w-4 shrink-0 text-slate-600" />
                                )}

                                <span className="line-clamp-2">
                                  {lesson.title}
                                </span>
                              </Link>
                            );
                          },
                        )}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </aside>

          <section className="bg-slate-100">
            <div className="mx-auto max-w-4xl px-6 py-8 lg:px-10 lg:py-12">
              <div className="rounded-3xl border border-slate-200 bg-white shadow-xl">
                <div className="border-b border-slate-200 p-7 sm:p-10">
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                    {currentLesson.moduleTitle}
                  </p>

                  <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                    {currentLesson.title}
                  </h1>

                  {currentLesson.duration && (
                    <p className="mt-3 text-sm text-slate-500">
                      Lesson duration:{" "}
                      {currentLesson.duration}
                    </p>
                  )}
                </div>

                <div className="p-7 sm:p-10">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <BookOpen className="h-5 w-5" />
                    </div>

                    <h2 className="mt-5 text-xl font-bold text-slate-900">
                      Lesson content
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                      This lesson workspace will contain
                      the full GrowthPilot Academy learning
                      experience, including instructional
                      content, examples, business cases,
                      activities, assessments, and practical
                      exercises.
                    </p>
                  </div>

                  <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {isCompleted(
                            currentLesson.id,
                          )
                            ? "Great work!"
                            : "Finished this lesson?"}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {isCompleted(
                            currentLesson.id,
                          )
                            ? "Your progress has been recorded."
                            : "Mark this lesson complete when you have finished the learning material."}
                        </p>
                      </div>

                      <LessonCompletionAction
                        learnerId={learnerId}
                        courseId={courseId}
                        lessonId={
                          currentLesson.id
                        }
                        totalLessons={
                          totalLessons
                        }
                        initiallyCompleted={isCompleted(
                          currentLesson.id,
                        )}
                        onCompleted={
                          handleCompleted
                        }
                      />
                    </div>
                  </div>

                  {courseCompleted && (
                    <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

                        <div>
                          <p className="font-semibold text-emerald-900">
                            Course completed
                          </p>

                          <p className="mt-1 text-sm leading-6 text-emerald-700">
                            Congratulations. You have
                            completed every lesson in this
                            course.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    {previousLesson ? (
                      <Link
                        href={`/dev/academy/courses/${courseId}/learn/${previousLesson.id}`}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Previous Lesson
                      </Link>
                    ) : (
                      <span />
                    )}

                    {nextLesson ? (
                      <Link
                        href={`/dev/academy/courses/${courseId}/learn/${nextLesson.id}`}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-emerald-700"
                      >
                        Next Lesson
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ) : courseCompleted ? (
                      <Link
                        href={`/dev/academy/courses/${courseId}`}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-emerald-700"
                      >
                        Back to Course
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-slate-200 px-5 py-3 text-sm font-bold text-slate-400"
                      >
                        Complete Lesson to Continue
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}