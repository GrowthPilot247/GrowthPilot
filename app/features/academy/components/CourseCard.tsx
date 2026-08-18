import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Clock3,
  Sparkles,
} from "lucide-react";

import { Course } from "../types/course";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          {course.category}
        </span>

        {course.aiRecommended && (
          <span className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
            <Sparkles className="h-3.5 w-3.5" />
            AI Recommended
          </span>
        )}
      </div>

      <h3 className="mt-5 text-lg font-semibold text-slate-900">
        {course.title}
      </h3>

      <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
        {course.shortDescription ?? course.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-500">
        <span className="inline-flex items-center gap-1.5">
          <Clock3 className="h-4 w-4" />
          {course.duration}
        </span>

        <span className="inline-flex items-center gap-1.5">
          <BookOpen className="h-4 w-4" />
          {course.lessons} lessons
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-xs font-medium text-slate-500">
          {course.level}
        </span>

        <Link
          href={`/dev/academy/courses/${course.id}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition-colors hover:text-emerald-700"
        >
          View Course
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}