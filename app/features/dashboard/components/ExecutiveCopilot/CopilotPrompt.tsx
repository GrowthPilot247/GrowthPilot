"use client";

import { useState } from "react";

import {
  askExecutiveCopilot,
  type ExecutiveChatResponse,
} from "@/app/features/dashboard/services/executive-chat.service";

interface CopilotPromptProps {
  placeholder?: string;
  onResponse?: (response: ExecutiveChatResponse) => void;
}

export function CopilotPrompt({
  placeholder = "Example: What should I focus on today?",
  onResponse,
}: CopilotPromptProps) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  function runPrompt(text: string) {
    setPrompt(text);
  }

  function analyze() {
    if (!prompt.trim()) return;

    setLoading(true);

    setTimeout(() => {
      const response = askExecutiveCopilot(prompt);

      onResponse?.(response);

      setLoading(false);
    }, 800);
  }

  function clearPrompt() {
    setPrompt("");
  }

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
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-300 bg-white p-3 text-sm outline-none transition focus:border-emerald-500"
      />

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => runPrompt("Revenue Forecast")}
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm transition hover:bg-slate-100"
        >
          Revenue Forecast
        </button>

        <button
          type="button"
          onClick={() => runPrompt("Highest Risk")}
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm transition hover:bg-slate-100"
        >
          Highest Risk
        </button>

        <button
          type="button"
          onClick={() => runPrompt("Marketing Summary")}
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm transition hover:bg-slate-100"
        >
          Marketing Summary
        </button>

        <button
          type="button"
          onClick={() => runPrompt("Today's Priorities")}
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm transition hover:bg-slate-100"
        >
          Today's Priorities
        </button>
      </div>

      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={analyze}
          disabled={loading}
          className="flex-1 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-50"
        >
          {loading ? "Analyzing..." : "Analyze Business"}
        </button>

        <button
          type="button"
          onClick={clearPrompt}
          className="rounded-xl border border-slate-300 px-5 py-3 font-semibold transition hover:bg-slate-100"
        >
          Clear
        </button>
      </div>
    </div>
  );
}