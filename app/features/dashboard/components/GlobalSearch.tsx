"use client";

import { Search, Clock } from "lucide-react";
import { useState } from "react";

export type SearchResult = {
  id: string;
  title: string;
  category: string;
};

type GlobalSearchProps = {
  recentSearches?: string[];
  results?: SearchResult[];
  placeholder?: string;
};

export function GlobalSearch({
  recentSearches = [],
  results = [],
  placeholder = "Search GrowthPilot...",
}: GlobalSearchProps) {
  const [query, setQuery] = useState("");

  const filteredResults = results.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="relative w-full">
      <div className="flex items-center rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition-colors focus-within:border-blue-500">
        <Search className="h-5 w-5 text-slate-400" />

        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="ml-3 w-full border-none bg-transparent text-sm outline-none placeholder:text-slate-400"
        />
      </div>

      {(query || recentSearches.length > 0) && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-white shadow-lg">
          {query ? (
            filteredResults.length > 0 ? (
              filteredResults.map((result) => (
                <button
                  key={result.id}
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-slate-50"
                >
                  <div>
                    <p className="font-medium text-slate-900">
                      {result.title}
                    </p>
                    <p className="text-xs text-slate-500">
                      {result.category}
                    </p>
                  </div>
                </button>
              ))
            ) : (
              <div className="px-4 py-6 text-center text-sm text-slate-500">
                No matching results found.
              </div>
            )
          ) : (
            <>
              <div className="border-b border-slate-100 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Recent Searches
              </div>

              {recentSearches.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-slate-50"
                >
                  <Clock className="h-4 w-4 text-slate-400" />
                  <span className="text-sm text-slate-700">
                    {item}
                  </span>
                </button>
              ))}
            </>
          )}
        </div>
      )}
    </section>
  );
}