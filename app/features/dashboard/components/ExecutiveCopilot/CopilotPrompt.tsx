"use client";

interface CopilotPromptProps {
  placeholder?: string;
}

export function CopilotPrompt({
  placeholder = "Example: What should I focus on today?",
}: CopilotPromptProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <label
        htmlFor="copilot-prompt"
        className="mb-2 block text-sm font-semibold text-slate-700"
      >
        Ask Executive Copilot
      </label>

      <textarea
        id="copilot-prompt"
        rows={4}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-300 bg-white p-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500"
      />

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
        >
          Revenue Forecast
        </button>

        <button
          type="button"
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
        >
          Highest Risk
        </button>

        <button
          type="button"
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
        >
          Marketing Summary
        </button>

        <button
          type="button"
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
        >
          Today's Priorities
        </button>
      </div>

      <div className="mt-4 flex gap-3">
        <button
          type="button"
          className="flex-1 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700"
        >
          Analyze Business
        </button>

        <button
          type="button"
          className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          Clear
        </button>
      </div>
    </div>
  );
}