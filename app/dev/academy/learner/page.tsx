import { LearnerDashboard } from "@/app/features/academy/components/LearnerDashboard";
import { getLearnerDashboard } from "@/app/features/academy/data/learner";

export default function AcademyLearnerDashboardPage() {
  const dashboardData = getLearnerDashboard(
    "gp-demo-learner-001",
  );

  return <LearnerDashboard data={dashboardData} />;
}