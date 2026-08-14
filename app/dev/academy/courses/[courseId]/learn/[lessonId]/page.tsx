import { notFound } from "next/navigation";

import { CoursePlayer } from "@/app/features/academy/components/CoursePlayer";
import { academyCourses } from "@/app/features/academy/data/courses";

interface CoursePlayerPageProps {
  params: Promise<{
    courseId: string;
    lessonId: string;
  }>;
}

export default async function CoursePlayerPage({
  params,
}: CoursePlayerPageProps) {
  const { courseId, lessonId } = await params;

  const course = academyCourses.find(
    (item) => item.id === courseId,
  );

  if (!course) {
    notFound();
  }

  const lessonExists = course.modules?.some(
    (module) =>
      module.lessons.some(
        (lesson) => lesson.id === lessonId,
      ),
  );

  if (!lessonExists) {
    notFound();
  }

  /*
   * Keep this learner identifier aligned with the
   * development enrollment implementation.
   *
   * Production authentication will replace this
   * with the authenticated learner ID.
   */
  const learnerId = course.aiRecommended
    ? "gp-demo-learner-001"
    : "external-demo-learner-001";

  return (
    <CoursePlayer
      courseId={course.id}
      courseTitle={course.title}
      modules={course.modules ?? []}
      lessonId={lessonId}
      learnerId={learnerId}
    />
  );
}