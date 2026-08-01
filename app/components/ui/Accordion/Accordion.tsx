"use client";

import { useState } from "react";
import { cn } from "@/app/lib/cn";
import { AccordionProps } from "./Accordion.types";

export function Accordion({
  items,
  openItem,
  onChange,
  className,
}: AccordionProps) {
  const [internalOpen, setInternalOpen] = useState<string | null>(
    openItem ?? null
  );

  const activeItem = openItem ?? internalOpen;

  const handleToggle = (id: string) => {
    const next = activeItem === id ? null : id;

    if (openItem === undefined) {
      setInternalOpen(next);
    }

    onChange?.(next ?? "");
  };

  return (
    <div
      className={cn(
        "space-y-3",
        className
      )}
    >
      {items.map((item) => {
        const isOpen = activeItem === item.id;

        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white"
          >
            <button
              type="button"
              onClick={() => handleToggle(item.id)}
              className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-slate-50"
            >
              <span className="font-medium text-slate-900">
                {item.title}
              </span>

              <span
                className={cn(
                  "text-xl font-bold transition-transform duration-200",
                  isOpen && "rotate-45"
                )}
              >
                +
              </span>
            </button>

            <div
              className={cn(
                "grid transition-all duration-300 ease-in-out",
                isOpen
                  ? "grid-rows-[1fr]"
                  : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <div className="border-t border-slate-100 px-5 py-4 text-slate-600">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}