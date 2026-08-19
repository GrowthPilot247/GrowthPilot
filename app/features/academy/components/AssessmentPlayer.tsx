"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Circle,
  Clock3,
  Send,
} from "lucide-react";

import type {
  Assessment,
  AssessmentAnswer,
} from "../types/assessment";

interface AssessmentPlayerProps {
  assessment: Assessment;
  onSubmit: (
    answers: AssessmentAnswer[],
  ) => void;
  onExit?: () => void;
}

export function AssessmentPlayer({
  assessment,
  onSubmit,
  onExit,
}: AssessmentPlayerProps) {
  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [answers, setAnswers] = useState<
    AssessmentAnswer[]
  >([]);

  const [submitted, setSubmitted] =
    useState(false);

  const currentQuestion =
    assessment.questions[currentIndex];

  const selectedOptionId =
    answers.find(
      (answer) =>
        answer.questionId ===
        currentQuestion?.id,
    )?.selectedOptionId;

  const answeredCount = useMemo(
    () => answers.length,
    [answers],
  );

  const totalQuestions =
    assessment.questions.length;

  const progress =
    totalQuestions > 0
      ? Math.round(
          ((currentIndex + 1) /
            totalQuestions) *
            100,
        )
      : 0;

  const isLastQuestion =
    currentIndex ===
    totalQuestions - 1;

  const hasSelectedAnswer =
    Boolean(selectedOptionId);

  function handleSelectOption(
    optionId: string,
  ) {
    if (!currentQuestion || submitted) {
      return;
    }

    setAnswers((current) => {
      const existing = current.find(
        (answer) =>
          answer.questionId ===
          currentQuestion.id,
      );

      if (existing) {
        return current.map((answer) =>
          answer.questionId ===
          currentQuestion.id
            ? {
                ...answer,
                selectedOptionId:
                  optionId,
              }
            : answer,
        );
      }

      return [
        ...current,
        {
          questionId:
            currentQuestion.id,
          selectedOptionId:
            optionId,
        },
      ];
    });
  }

  function handleNext() {
    if (
      currentIndex <
      totalQuestions - 1
    ) {
      setCurrentIndex(
        (current) => current + 1,
      );
    }
  }

  function handlePrevious() {
    if (currentIndex > 0) {
      setCurrentIndex(
        (current) => current - 1,
      );
    }
  }

  function handleSubmit() {
    if (
      submitted ||
      answers.length !==
        totalQuestions
    ) {
      return;
    }

    setSubmitted(true);
    onSubmit(answers);
  }

  if (!currentQuestion) {
    return (
      <section className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">
          Assessment unavailable
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          There are currently no questions
          available for this assessment.
        </p>

        {onExit && (
          <button
            type="button"
            onClick={onExit}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Return to Course
          </button>
        )}
      </section>
    );
  }

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <header className="border-b border-slate-200 bg-slate-950 px-6 py-6 text-white sm:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              GrowthPilot Academy
            </p>

            <h1 className="mt-2 text-2xl font-bold">
              {assessment.title}
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
              {assessment.description}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            <Clock3 className="h-4 w-4 text-emerald-400" />

            <span>
              Passing score:{" "}
              <strong className="text-white">
                {assessment.passingScore}%
              </strong>
            </span>
          </div>
        </div>
      </header>

      <div className="border-b border-slate-200 px-6 py-5 sm:px-8">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-semibold text-slate-700">
            Question {currentIndex + 1}{" "}
            of {totalQuestions}
          </span>

          <span className="text-sm text-slate-500">
            {answeredCount}/{totalQuestions}{" "}
            answered
          </span>
        </div>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-emerald-500 transition-all duration-300"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      <div className="px-6 py-8 sm:px-8 sm:py-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
            Question {currentIndex + 1}
          </p>

          <h2 className="mt-3 text-xl font-bold leading-8 text-slate-900">
            {currentQuestion.question}
          </h2>
        </div>

        <div className="mt-7 space-y-3">
          {currentQuestion.options.map(
            (option) => {
              const selected =
                selectedOptionId ===
                option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() =>
                    handleSelectOption(
                      option.id,
                    )
                  }
                  disabled={submitted}
                  className={[
                    "flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition-all",
                    selected
                      ? "border-emerald-500 bg-emerald-50 ring-2 ring-emerald-500/10"
                      : "border-slate-200 bg-white hover:border-emerald-300 hover:bg-slate-50",
                    submitted
                      ? "cursor-default"
                      : "cursor-pointer",
                  ].join(" ")}
                >
                  <span className="mt-0.5 shrink-0">
                    {selected ? (
                      <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                    ) : (
                      <Circle className="h-5 w-5 text-slate-300" />
                    )}
                  </span>

                  <span
                    className={
                      selected
                        ? "font-medium text-slate-900"
                        : "text-slate-700"
                    }
                  >
                    {option.text}
                  </span>
                </button>
              );
            },
          )}
        </div>
      </div>

      <footer className="flex flex-col gap-4 border-t border-slate-200 bg-slate-50 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          {onExit && (
            <button
              type="button"
              onClick={onExit}
              disabled={submitted}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-white hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ArrowLeft className="h-4 w-4" />
              Exit Assessment
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={
              currentIndex === 0 ||
              submitted
            }
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous
          </button>

          {!isLastQuestion ? (
            <button
              type="button"
              onClick={handleNext}
              disabled={
                !hasSelectedAnswer ||
                submitted
              }
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={
                answers.length !==
                  totalQuestions ||
                submitted
              }
              className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Send className="h-4 w-4" />
              Submit Assessment
            </button>
          )}
        </div>
      </footer>
    </section>
  );
}
