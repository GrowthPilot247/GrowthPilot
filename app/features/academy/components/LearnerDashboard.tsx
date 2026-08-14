"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  Flame,
  GraduationCap,
  Lightbulb,
  PlayCircle,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

import { generateLearningCoach } from "../services/learningCoachService";
import { LearnerDashboardData } from "../types/learner";

interface LearnerDashboardProps {
  data: LearnerDashboardData;
}

function getInitials(
  firstName: string,
  lastName: string,
) {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`;
}

function formatLearningTime(
  totalMinutes: number,
) {
  if (totalMinutes < 60) {
    return `${totalMinutes} min`;
  }

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (minutes === 0) {
    return `${hours}h`;
  }

  return `${hours}h ${minutes}m`;
}

function getActivityIcon(
  type: string,
) {
  switch (type) {
    case "Lesson Completed":
      return CheckCircle2;

    case "Course Started":
      return PlayCircle;

    case "Course Completed":
      return GraduationCap;

    case "Certificate Earned":
      return Award;

    case "AI Recommendation":
      return Sparkles;

    default:
      return BookOpen;
  }
}

export function LearnerDashboard({
  data,
}: LearnerDashboardProps) {
  const { learner } = data;

  const learningTime =
    formatLearningTime(
      learner.totalLearningMinutes,
    );

  const learningCoach =
    generateLearningCoach(learner);

  const currentIntervention =
    learningCoach.currentIntervention;

  const currentPriority =
    learningCoach.currentPriority;

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl" />

          <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-cyan-200/20 blur-3xl" />

          <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
          {/* Header */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-lg font-bold text-white shadow-sm">
                  {getInitials(
                    learner.firstName,
                    learner.lastName,
                  )}
                </div>

                <div>
                  <p className="text-sm font-semibold text-emerald-600">
                    GrowthPilot Academy
                  </p>

                  <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                    Welcome back,{" "}
                    {learner.firstName}.
                  </h1>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                    Continue developing the capabilities
                    required to build, lead, and grow
                    intelligently.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/dev/academy"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                >
                  <BookOpen className="h-4 w-4" />
                  Explore Academy
                </Link>

                <Link
                  href="/dev/academy"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md"
                >
                  Find a Course
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* Metrics */}
          <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              icon={TrendingUp}
              label="Overall Progress"
              value={`${learner.overallProgress}%`}
              description="Across your learning journey"
            />

            <MetricCard
              icon={BookOpen}
              label="Courses Completed"
              value={learner.totalCoursesCompleted.toString()}
              description={`${learner.enrolledCourseIds.length} courses enrolled`}
            />

            <MetricCard
              icon={Clock3}
              label="Learning Time"
              value={learningTime}
              description="This learning journey"
            />

            <MetricCard
              icon={Flame}
              label="Learning Streak"
              value={`${learner.currentLearningStreak} days`}
              description={`Best: ${learner.longestLearningStreak} days`}
            />
          </section>

          {/* Continue Learning + AI Coach */}
          <section className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.65fr)_minmax(320px,0.85fr)]">
            {/* Continue Learning */}
            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                    Continue Learning
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-slate-950">
                    Pick up where you left off
                  </h2>
                </div>

                <Link
                  href="/dev/academy"
                  className="hidden items-center gap-1 text-sm font-semibold text-emerald-600 hover:text-emerald-700 sm:inline-flex"
                >
                  View Courses
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {data.activeCourse ? (
                <div className="p-6">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                          In Progress
                        </span>

                        <h3 className="mt-3 text-lg font-bold text-slate-950">
                          {data.activeCourse.title}
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          {data.activeCourse.completedLessons} of{" "}
                          {data.activeCourse.totalLessons} lessons
                          completed
                        </p>
                      </div>

                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-emerald-100 bg-white text-sm font-bold text-emerald-600">
                        {data.activeCourse.progress}%
                      </div>
                    </div>

                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-200">
                      <div
                        className="h-full rounded-full bg-emerald-500 transition-all"
                        style={{
                          width: `${data.activeCourse.progress}%`,
                        }}
                      />
                    </div>

                    {data.activeCourse.lastLessonId && (
                      <p className="mt-3 text-xs text-slate-500">
                        Last lesson completed:{" "}
                        <span className="font-semibold text-slate-700">
                          {data.activeCourse.lastLessonId}
                        </span>
                      </p>
                    )}

                    <div className="mt-5">
                      <Link
                        href={`/dev/academy/courses/${data.activeCourse.courseId}/learn/${data.activeCourse.lastLessonId ?? ""}`}
                        className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-emerald-700"
                      >
                        Continue Learning
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-8 text-center">
                  <BookOpen className="mx-auto h-10 w-10 text-slate-300" />

                  <h3 className="mt-4 font-semibold text-slate-900">
                    Your learning journey starts here
                  </h3>

                  <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                    Explore the Academy and enroll in a course
                    that matches your goals.
                  </p>

                  <Link
                    href="/dev/academy"
                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
                  >
                    Explore Courses
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </div>

            {/* AI Learning Coach */}
            <div className="overflow-hidden rounded-3xl bg-slate-950 shadow-sm">
              <div className="relative p-6">
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-500/20 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                      <BrainCircuit className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                        GrowthPilot AI
                      </p>

                      <h2 className="mt-1 text-lg font-bold text-white">
                        Learning Coach
                      </h2>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-6 text-slate-300">
                    {learningCoach.summary}
                  </p>

                  {currentPriority &&
                  currentIntervention ? (
                    <>
                      <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-start gap-3">
                          <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-3">
                              <p className="text-sm font-semibold text-white">
                                Current learning priority
                              </p>

                              <span className="shrink-0 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] font-bold text-emerald-300">
                                {currentIntervention.relevanceScore}%
                                match
                              </span>
                            </div>

                            <p className="mt-2 text-base font-bold text-white">
                              {currentPriority.growthDimension}
                            </p>

                            {currentIntervention.identifiedChallenge && (
                              <p className="mt-2 text-xs leading-5 text-slate-400">
                                Challenge:{" "}
                                <span className="font-medium text-slate-300">
                                  {
                                    currentIntervention.identifiedChallenge
                                  }
                                </span>
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                          Recommended intervention
                        </p>

                        <h3 className="mt-2 text-base font-bold text-white">
                          {currentIntervention.courseTitle}
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-slate-400">
                          {currentIntervention.recommendationReason}
                        </p>

                        <div className="mt-3 flex items-center justify-between text-xs">
                          <span className="text-slate-500">
                            Progress
                          </span>

                          <span className="font-bold text-emerald-300">
                            {currentIntervention.progress}%
                          </span>
                        </div>

                        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-700">
                          <div
                            className="h-full rounded-full bg-emerald-500"
                            style={{
                              width: `${currentIntervention.progress}%`,
                            }}
                          />
                        </div>
                      </div>

                      <Link
                        href={`/dev/academy/courses/${currentIntervention.courseId}`}
                        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-emerald-400"
                      >
                        {currentIntervention.actionLabel}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </>
                  ) : (
                    <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-sm font-semibold text-white">
                        {learningCoach.headline}
                      </p>

                      {learningCoach.nextRecommendations.length > 0 ? (
                        <div className="mt-4 space-y-3">
                          {learningCoach.nextRecommendations
                            .slice(0, 2)
                            .map(
                              (recommendation) => (
                                <Link
                                  key={recommendation.courseId}
                                  href={`/dev/academy/courses/${recommendation.courseId}`}
                                  className="block rounded-xl border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/10"
                                >
                                  <div className="flex items-start justify-between gap-3">
                                    <div>
                                      <p className="text-sm font-semibold text-white">
                                        {
                                          recommendation.courseTitle
                                        }
                                      </p>

                                      <p className="mt-1 text-xs text-slate-400">
                                        {
                                          recommendation.growthDimension
                                        }
                                      </p>
                                    </div>

                                    <span className="text-xs font-bold text-emerald-300">
                                      {
                                        recommendation.relevanceScore
                                      }
                                      %
                                    </span>
                                  </div>
                                </Link>
                              ),
                            )}
                        </div>
                      ) : (
                        <p className="mt-2 text-xs leading-5 text-slate-400">
                          Continue building your learning history
                          to receive more personalized
                          recommendations.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Next Learning Opportunities */}
          {learningCoach.nextRecommendations.length > 0 && (
            <section className="mt-6 rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                  AI-Powered Development
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-950">
                  Recommended Next
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Courses selected from your profile, learning
                  goals, business context, and Academy relevance.
                </p>
              </div>

              <div className="grid gap-4 p-6 md:grid-cols-2 xl:grid-cols-3">
                {learningCoach.nextRecommendations.map(
                  (recommendation) => (
                    <Link
                      key={recommendation.courseId}
                      href={`/dev/academy/courses/${recommendation.courseId}`}
                      className="group rounded-2xl border border-slate-200 p-5 transition-all hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                          {recommendation.category}
                        </span>

                        <span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-bold text-violet-700">
                          {recommendation.relevanceScore}%
                        </span>
                      </div>

                      <h3 className="mt-4 font-semibold leading-6 text-slate-950">
                        {recommendation.courseTitle}
                      </h3>

                      <p className="mt-2 text-xs font-semibold text-emerald-600">
                        {recommendation.growthDimension}
                      </p>

                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                        {recommendation.reason}
                      </p>

                      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600">
                        {recommendation.actionLabel}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </Link>
                  ),
                )}
              </div>
            </section>
          )}

          {/* My Courses */}
          <section className="mt-6 rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-col gap-3 border-b border-slate-200 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                  My Learning
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-950">
                  My Courses
                </h2>
              </div>

              <Link
                href="/dev/academy"
                className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
              >
                Browse Academy
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 p-6 md:grid-cols-2 xl:grid-cols-3">
              {data.courses.map((course) => (
                <CourseProgressCard
                  key={course.courseId}
                  course={course}
                />
              ))}
            </div>
          </section>

          {/* Learning Paths + Certificates */}
          <section className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.8fr)]">
            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                  Structured Development
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-950">
                  Learning Paths
                </h2>
              </div>

              <div className="space-y-3 p-6">
                {data.learningPaths.map((path) => (
                  <div
                    key={path.id}
                    className="rounded-2xl border border-slate-200 p-4 transition-colors hover:bg-slate-50"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-sm font-bold text-emerald-700">
                        {path.level}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                          <h3 className="font-semibold text-slate-900">
                            {path.title}
                          </h3>

                          <span className="text-xs font-semibold text-slate-500">
                            {path.progress}%
                          </span>
                        </div>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {path.description}
                        </p>

                        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className="h-full rounded-full bg-emerald-500"
                            style={{
                              width: `${path.progress}%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                  Credentials
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-950">
                  Certificates
                </h2>
              </div>

              <div className="p-6">
                {data.certificates.length > 0 ? (
                  <div className="space-y-3">
                    {data.certificates.map(
                      (certificate) => (
                        <div
                          key={certificate.id}
                          className="rounded-2xl border border-slate-200 p-4"
                        >
                          <div className="flex items-start gap-3">
                            <Award className="h-5 w-5 text-amber-500" />

                            <div>
                              <p className="font-semibold text-slate-900">
                                {certificate.courseTitle}
                              </p>

                              <p className="mt-1 text-xs text-slate-500">
                                {certificate.credentialType}
                              </p>
                            </div>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                ) : (
                  <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center">
                    <Award className="mx-auto h-9 w-9 text-slate-300" />

                    <p className="mt-3 text-sm font-semibold text-slate-700">
                      No certificates yet
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Complete eligible courses to begin
                      building your GrowthPilot credentials.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Recent Activity */}
          <section className="mt-6 rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 px-6 py-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                Learning Activity
              </p>

              <h2 className="mt-1 text-xl font-bold text-slate-950">
                Recent Activity
              </h2>
            </div>

            <div className="divide-y divide-slate-100">
              {data.recentActivity.map(
                (activity) => {
                  const ActivityIcon =
                    getActivityIcon(activity.type);

                  return (
                    <div
                      key={activity.id}
                      className="flex items-start gap-4 px-6 py-5"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                        <ActivityIcon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-slate-900">
                          {activity.title}
                        </p>

                        <p className="mt-1 text-sm leading-6 text-slate-500">
                          {activity.description}
                        </p>
                      </div>

                      <span className="hidden shrink-0 text-xs text-slate-400 sm:block">
                        Recently
                      </span>
                    </div>
                  );
                },
              )}
            </div>
          </section>

          {/* Growth Dimensions */}
          {learner.learnerType ===
            "GrowthPilot User" && (
            <section className="mt-6 rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 px-6 py-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Target className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                      Growth Capability
                    </p>

                    <h2 className="mt-1 text-xl font-bold text-slate-950">
                      Your Growth Dimensions
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Capability signals from your GrowthPilot
                      learning environment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4">
                <GrowthDimension
                  label="Strategic"
                  value={learner.growthDimensions.strategic}
                />

                <GrowthDimension
                  label="Operational"
                  value={learner.growthDimensions.operational}
                />

                <GrowthDimension
                  label="Financial"
                  value={learner.growthDimensions.financial}
                />

                <GrowthDimension
                  label="Customer"
                  value={learner.growthDimensions.customer}
                  priority
                />

                <GrowthDimension
                  label="People"
                  value={learner.growthDimensions.people}
                />

                <GrowthDimension
                  label="Innovation"
                  value={learner.growthDimensions.innovation}
                />

                <GrowthDimension
                  label="Ecosystem"
                  value={learner.growthDimensions.ecosystem}
                />
              </div>
            </section>
          )}
        </div>
      </div>
    </main>
  );
}

function MetricCard({
  icon: Icon,
  label,
  value,
  description,
}: {
  icon: typeof TrendingUp;
  label: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
          <Icon className="h-5 w-5" />
        </div>
      </div>

      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </p>

      <p className="mt-1 text-2xl font-bold text-slate-950">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-500">
        {description}
      </p>
    </div>
  );
}

function CourseProgressCard({
  course,
}: {
  course: LearnerDashboardData["courses"][number];
}) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5 transition-all hover:-translate-y-0.5 hover:shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            course.status === "In Progress"
              ? "bg-emerald-50 text-emerald-700"
              : "bg-slate-100 text-slate-600"
          }`}
        >
          {course.status}
        </span>

        {course.aiRecommended && (
          <span className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-700">
            <Sparkles className="h-3 w-3" />
            AI
          </span>
        )}
      </div>

      <h3 className="mt-4 line-clamp-2 font-semibold leading-6 text-slate-950">
        {course.title}
      </h3>

      <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
        <span>
          {course.completedLessons} of{" "}
          {course.totalLessons} lessons
        </span>

        <span className="font-semibold text-slate-700">
          {course.progress}%
        </span>
      </div>

      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-emerald-500"
          style={{
            width: `${course.progress}%`,
          }}
        />
      </div>

      <Link
        href={`/dev/academy/courses/${course.courseId}`}
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
      >
        View Course
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function GrowthDimension({
  label,
  value,
  priority = false,
}: {
  label: string;
  value: number;
  priority?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-4 ${
        priority
          ? "border-amber-200 bg-amber-50/50"
          : "border-slate-200 bg-slate-50"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-700">
          {label}
        </span>

        <span className="text-sm font-bold text-slate-950">
          {value}
        </span>
      </div>

      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-emerald-500"
          style={{
            width: `${Math.min(value, 100)}%`,
          }}
        />
      </div>

      {priority && (
        <p className="mt-2 text-[11px] font-semibold text-amber-700">
          Current learning priority
        </p>
      )}
    </div>
  );
}