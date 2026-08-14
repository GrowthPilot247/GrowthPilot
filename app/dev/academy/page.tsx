import { AcademyHero } from "@/app/features/academy/components/AcademyHero";
import { AcademyLearningPaths } from "@/app/features/academy/components/AcademyLearningPaths";
import { AcademyRecommendations } from "@/app/features/academy/components/AcademyRecommendations";
import { CourseCatalog } from "@/app/features/academy/components/CourseCatalog";
import { CurriculumExplorer } from "@/app/features/academy/components/CurriculumExplorer";

export default function AcademyLabPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07111f]">
      {/* =========================================================
          GrowthPilot Academy Premium Background
          CSS/Tailwind only — no images
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Emerald atmospheric glow */}
        <div className="absolute -left-48 -top-48 h-[42rem] w-[42rem] rounded-full bg-emerald-500/20 blur-[120px]" />

        {/* Blue atmospheric glow */}
        <div className="absolute -right-48 -top-32 h-[40rem] w-[40rem] rounded-full bg-blue-600/20 blur-[120px]" />

        {/* Indigo atmospheric glow */}
        <div className="absolute right-[8%] top-[38%] h-[30rem] w-[30rem] rounded-full bg-indigo-500/15 blur-[110px]" />

        {/* Emerald lower glow */}
        <div className="absolute -bottom-48 -left-32 h-[38rem] w-[38rem] rounded-full bg-emerald-400/15 blur-[120px]" />

        {/* Violet lower glow */}
        <div className="absolute -bottom-56 right-[-8rem] h-[38rem] w-[38rem] rounded-full bg-violet-500/15 blur-[120px]" />

        {/* Central atmospheric glow */}
        <div className="absolute left-1/2 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[100px]" />

        {/* Radial lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(16,185,129,0.16),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_50%_85%,rgba(99,102,241,0.10),transparent_32%)]" />

        {/* Professional grid */}
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:48px_48px]" />

        {/* Diagonal texture */}
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(135deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:80px_80px]" />

        {/* Bottom depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030712]/70" />
      </div>

      {/* =========================================================
          ACADEMY CONTENT CANVAS

          The light translucent surface ensures that existing
          dark headings remain readable over the new background.
      ========================================================= */}

      <div className="relative z-10 mx-auto w-full max-w-[1540px] px-4 py-6 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/20 bg-slate-100/95 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6 lg:p-8">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
            {/* Academy Hero */}
            <AcademyHero />

            {/* AI Learning Recommendations */}
            <AcademyRecommendations />

            {/* Learning Paths */}
            <AcademyLearningPaths />

            {/* Business School Curriculum */}
            <CurriculumExplorer />

            {/* Course Catalog */}
            <CourseCatalog />
          </div>
        </div>
      </div>
    </main>
  );
}