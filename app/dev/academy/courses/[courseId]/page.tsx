import { EnrollmentAction } from "@/app/features/academy/components/EnrollmentAction";
import Link from "next/link";
import {
  ArrowLeft,
  Award,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronDown,
  Clock3,
  GraduationCap,
  PlayCircle,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import { academyCourses } from "@/app/features/academy/data/courses";
import { CourseModule } from "@/app/features/academy/types/course";

interface CourseDetailPageProps {
  params: Promise<{
    courseId: string;
  }>;
}

function ModuleCard({
  module,
  index,
}: {
  module: CourseModule;
  index: number;
}) {
  return (
    <details
      className="group rounded-2xl border border-slate-200 bg-white shadow-sm"
      open={index === 0}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-sm font-bold text-emerald-700">
            {String(index + 1).padStart(2, "0")}
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              {module.title}
            </h3>

            {module.description && (
              <p className="mt-1 text-sm text-slate-500">
                {module.description}
              </p>
            )}
          </div>
        </div>

        <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
      </summary>

      <div className="border-t border-slate-100 px-5 pb-5 pt-2">
        <div className="divide-y divide-slate-100">
          {module.lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="flex items-center justify-between gap-4 py-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
                  <PlayCircle className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-800">
                    {lesson.title}
                  </p>

                  {lesson.preview && (
                    <span className="mt-1 inline-block text-xs font-medium text-emerald-600">
                      Free Preview
                    </span>
                  )}
                </div>
              </div>

              {lesson.duration && (
                <span className="shrink-0 text-xs text-slate-400">
                  {lesson.duration}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </details>
  );
}

export default async function CourseDetailPage({
  params,
}: CourseDetailPageProps) {
  const { courseId } = await params;

  const course = academyCourses.find((item) => item.id === courseId);

  if (!course) {
    return (
      <main className="min-h-screen bg-slate-100">
        <div className="mx-auto flex min-h-screen w-full max-w-4xl items-center justify-center px-6">
          <div className="w-full rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
              <BookOpen className="h-6 w-6" />
            </div>

            <h1 className="mt-5 text-2xl font-bold text-slate-900">
              Course not found
            </h1>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              The course you are looking for does not exist or is no longer
              available in the GrowthPilot Academy catalog.
            </p>

            <Link
              href="/dev/academy"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Academy
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const totalLessons =
    course.modules?.reduce(
      (total, module) => total + module.lessons.length,
      0,
    ) ?? course.lessons;

  /*
   * The first lesson becomes the entry point for
   * the "Start Learning" action.
   */
  const firstLessonId = course.modules?.[0]?.lessons?.[0]?.id;

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-100">
      {/* =========================================================
          Background
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-emerald-200/30 blur-[110px]" />

        <div className="absolute -right-40 top-20 h-[30rem] w-[30rem] rounded-full bg-indigo-200/25 blur-[110px]" />

        <div className="absolute bottom-[-15rem] left-1/3 h-[32rem] w-[32rem] rounded-full bg-cyan-200/20 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-8">
        {/* =======================================================
            Breadcrumb
        ======================================================= */}

        <Link
          href="/dev/academy"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-emerald-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Academy
        </Link>

        {/* =======================================================
            Course Hero
        ======================================================= */}

        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 px-6 py-10 text-white sm:px-10 lg:px-12 lg:py-12">
            <div
              aria-hidden="true"
              className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-emerald-400/20 blur-[90px]"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-indigo-500/15 blur-[100px]"
            />

            <div className="relative z-10 max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-emerald-400/15 px-3 py-1.5 text-xs font-semibold text-emerald-300 ring-1 ring-inset ring-emerald-400/20">
                  {course.category}
                </span>

                <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-300">
                  {course.level}
                </span>

                <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-300">
                  {course.format}
                </span>

                {course.aiRecommended && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-400/15 px-3 py-1.5 text-xs font-semibold text-violet-300 ring-1 ring-inset ring-violet-400/20">
                    <Sparkles className="h-3.5 w-3.5" />
                    AI Recommended
                  </span>
                )}
              </div>

              <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {course.title}
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
                {course.shortDescription ?? course.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-emerald-400" />
                  {course.duration}
                </span>

                <span className="inline-flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-emerald-400" />
                  {totalLessons} lessons
                </span>

                <span className="inline-flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-emerald-400" />
                  {course.instructor}
                </span>
              </div>
            </div>
          </div>

          {/* =====================================================
              Course Quick Facts
          ===================================================== */}

          <div className="grid border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-b border-slate-200 p-5 sm:border-r lg:border-b-0">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Growth Dimension
              </p>

              <p className="mt-2 font-semibold text-slate-900">
                {course.growthDimension}
              </p>
            </div>

            <div className="border-b border-slate-200 p-5 lg:border-b-0 lg:border-r">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Learning Format
              </p>

              <p className="mt-2 font-semibold text-slate-900">
                {course.format}
              </p>
            </div>

            <div className="border-b border-slate-200 p-5 sm:border-r lg:border-b-0">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Audience
              </p>

              <p className="mt-2 font-semibold text-slate-900">
                {course.audience?.length
                  ? `${course.audience.length} learner groups`
                  : "Business professionals"}
              </p>
            </div>

            <div className="p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Certificate
              </p>

              <p className="mt-2 font-semibold text-slate-900">
                {course.certificateAvailable
                  ? "Available"
                  : "Not currently available"}
              </p>
            </div>
          </div>
        </section>

        {/* =======================================================
            Main Content + Enrollment Sidebar
        ======================================================= */}

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          {/* Main column */}
          <div className="space-y-8">
            {/* AI Recommendation */}
            {course.aiRecommended && (
              <section className="overflow-hidden rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                    <Brain className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-lg font-bold text-slate-900">
                        Why GrowthPilot recommended this course
                      </h2>

                      {course.relevanceScore !== undefined && (
                        <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-700">
                          {course.relevanceScore}% relevance
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {course.aiRecommendationReason ??
                        "GrowthPilot identified this course as relevant to your current business-development needs."}
                    </p>

                    {course.recommendedForChallenges &&
                      course.recommendedForChallenges.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {course.recommendedForChallenges.map((challenge) => (
                            <span
                              key={challenge}
                              className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-600 ring-1 ring-inset ring-violet-200"
                            >
                              {challenge}
                            </span>
                          ))}
                        </div>
                      )}
                  </div>
                </div>
              </section>
            )}

            {/* About Course */}
            <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <BookOpen className="h-5 w-5" />
                </div>

                <h2 className="text-2xl font-bold text-slate-900">
                  About this course
                </h2>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                {course.description}
              </p>
            </section>

            {/* Learning Outcomes */}
            {course.outcomes && course.outcomes.length > 0 && (
              <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Target className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      What you&apos;ll learn
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Practical capabilities you will develop through this
                      course.
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {course.outcomes.map((outcome) => (
                    <div
                      key={outcome.id}
                      className="rounded-xl border border-slate-100 bg-slate-50 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

                        <div>
                          <h3 className="text-sm font-semibold text-slate-900">
                            {outcome.title}
                          </h3>

                          {outcome.description && (
                            <p className="mt-1.5 text-xs leading-5 text-slate-500">
                              {outcome.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Curriculum */}
            {course.modules && course.modules.length > 0 && (
              <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                    Course Curriculum
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-slate-900">
                    Course modules
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    {course.modules.length} modules · {totalLessons} lessons
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  {course.modules.map((module, index) => (
                    <ModuleCard
                      key={module.id}
                      module={module}
                      index={index}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Skills */}
            {course.skills && course.skills.length > 0 && (
              <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900">
                  Skills you&apos;ll develop
                </h2>

                <div className="mt-5 flex flex-wrap gap-2">
                  {course.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Requirements */}
            {course.requirements && course.requirements.length > 0 && (
              <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900">
                  Requirements
                </h2>

                <div className="mt-5 space-y-4">
                  {course.requirements.map((requirement) => (
                    <div
                      key={requirement.id}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

                      <div>
                        <h3 className="text-sm font-semibold text-slate-900">
                          {requirement.title}
                        </h3>

                        {requirement.description && (
                          <p className="mt-1 text-sm leading-6 text-slate-500">
                            {requirement.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Audience */}
            {course.audience && course.audience.length > 0 && (
              <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-emerald-600" />

                  <h2 className="text-2xl font-bold text-slate-900">
                    Who this course is for
                  </h2>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {course.audience.map((audience) => (
                    <span
                      key={audience}
                      className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700"
                    >
                      {audience}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* =====================================================
              Enrollment Sidebar
          ===================================================== */}

          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
              <div className="bg-gradient-to-br from-slate-950 to-emerald-950 p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  GrowthPilot Academy
                </p>

                <h2 className="mt-3 text-xl font-bold">
                  Start learning today
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Build practical capabilities you can apply directly to your
                  business.
                </p>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Level</span>

                    <span className="font-semibold text-slate-900">
                      {course.level}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Duration</span>

                    <span className="font-semibold text-slate-900">
                      {course.duration}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Format</span>

                    <span className="font-semibold text-slate-900">
                      {course.format}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Lessons</span>

                    <span className="font-semibold text-slate-900">
                      {totalLessons}
                    </span>
                  </div>
                </div>

                <div className="my-6 border-t border-slate-100" />

                <EnrollmentAction
                  courseId={course.id}
                  totalLessons={totalLessons}
                  firstLessonId={firstLessonId}
                  aiRecommended={course.aiRecommended}
                  aiRecommendationReason={course.aiRecommendationReason}
                />

                {course.certificateAvailable && (
                  <div className="mt-5 flex items-start gap-3 rounded-xl bg-amber-50 p-4">
                    <Award className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />

                    <div>
                      <p className="text-sm font-semibold text-amber-900">
                        Certificate included
                      </p>

                      <p className="mt-1 text-xs leading-5 text-amber-700">
                        Complete the course requirements to become eligible
                        for the GrowthPilot certificate.
                      </p>
                    </div>
                  </div>
                )}

                <p className="mt-5 text-center text-xs leading-5 text-slate-400">
                  Enrollment and learner progress will be connected to the
                  GrowthPilot Academy learning system.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}