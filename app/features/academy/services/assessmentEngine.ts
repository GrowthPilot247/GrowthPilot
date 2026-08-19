import type {
  Assessment,
  AssessmentAnswer,
  AssessmentResult,
} from "../types/assessment";

export function calculateAssessmentScore(
  assessment: Assessment,
  answers: AssessmentAnswer[],
): AssessmentResult {
  let correctAnswers = 0;

  for (const question of assessment.questions) {
    const answer = answers.find(
      (item) =>
        item.questionId === question.id,
    );

    if (
      answer?.selectedOptionId ===
      question.correctOptionId
    ) {
      correctAnswers += 1;
    }
  }

  const totalQuestions =
    assessment.questions.length;

  const score =
    totalQuestions > 0
      ? Math.round(
          (correctAnswers / totalQuestions) *
            100,
        )
      : 0;

  return {
    assessmentId: assessment.id,
    learnerId: "",
    attemptNumber: 1,
    score,
    correctAnswers,
    totalQuestions,
    passed:
      score >= assessment.passingScore,
    answers,
    completedAt:
      new Date().toISOString(),
  };
}

export function isAssessmentPassed(
  assessment: Assessment,
  score: number,
): boolean {
  return score >= assessment.passingScore;
}

export function calculateQuestionScore(
  questionCorrect: boolean,
  points = 1,
): number {
  return questionCorrect ? points : 0;
}
