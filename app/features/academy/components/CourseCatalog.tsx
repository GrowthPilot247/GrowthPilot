import { academyCourses } from "../data/courses";
import { CourseCard } from "./CourseCard";

export function CourseCatalog() {
  return (
    <section>
      <div className="mb-5">
        <span className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
          Academy Library
        </span>

        <h2 className="mt-2 text-2xl font-bold text-slate-900">
          Explore Courses
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
          Build practical capabilities across the GrowthPilot Growth
          Framework and the core areas of business growth.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {academyCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}