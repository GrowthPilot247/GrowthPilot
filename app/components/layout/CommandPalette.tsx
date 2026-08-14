"use client";

import {
  Command,
  Search,
  X,
} from "lucide-react";
import {
  useEffect,
  useMemo,
  useState,
} from "react";

interface CommandItem {
  id: string;
  label: string;
  description?: string;
  shortcut?: string;
  onSelect?: () => void;
}

interface CommandPaletteProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  items?: CommandItem[];
}

const defaultItems: CommandItem[] = [
  {
    id: "dashboard",
    label: "Go to Dashboard",
    description: "Open the executive dashboard",
    shortcut: "G D",
  },
  {
    id: "crm",
    label: "Open CRM",
    description: "Manage leads, accounts, and opportunities",
    shortcut: "G C",
  },
  {
    id: "analytics",
    label: "View Analytics",
    description: "Review business performance",
    shortcut: "G A",
  },
  {
    id: "copilot",
    label: "Open AI Copilot",
    description: "Ask GrowthPilot AI for assistance",
    shortcut: "G I",
  },
  {
    id: "settings",
    label: "Open Settings",
    description: "Manage your GrowthPilot settings",
    shortcut: "G S",
  },
];

export function CommandPalette({
  open: controlledOpen,
  onOpenChange,
  items = defaultItems,
}: CommandPaletteProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [query, setQuery] = useState("");

  const open = controlledOpen ?? internalOpen;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const modifier = event.metaKey || event.ctrlKey;

      if (modifier && event.key.toLowerCase() === "k") {
        event.preventDefault();

        const nextOpen = !open;

        if (controlledOpen === undefined) {
          setInternalOpen(nextOpen);
        }

        onOpenChange?.(nextOpen);
      }

      if (event.key === "Escape" && open) {
        event.preventDefault();

        if (controlledOpen === undefined) {
          setInternalOpen(false);
        }

        onOpenChange?.(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, controlledOpen, onOpenChange]);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return items;
    }

    return items.filter((item) => {
      return (
        item.label.toLowerCase().includes(normalizedQuery) ||
        item.description?.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [items, query]);

  const handleClose = () => {
    if (controlledOpen === undefined) {
      setInternalOpen(false);
    }

    onOpenChange?.(false);
  };

  const handleSelect = (item: CommandItem) => {
    item.onSelect?.();
    handleClose();
  };

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-slate-950/40 px-4 pt-[12vh]"
      role="presentation"
      onMouseDown={handleClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-border px-5">
          <Search className="h-5 w-5 shrink-0 text-muted-foreground" />

          <input
            autoFocus
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search GrowthPilot..."
            className="h-14 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            aria-label="Search commands"
          />

          <button
            type="button"
            onClick={handleClose}
            aria-label="Close command palette"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent/10 hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-2">
          {filteredItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
              <Command className="mb-3 h-8 w-8 text-muted-foreground" />

              <p className="font-medium text-foreground">
                No commands found
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                Try a different search term.
              </p>
            </div>
          ) : (
            <div className="space-y-1">
              {filteredItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelect(item)}
                  className="flex w-full items-center justify-between gap-4 rounded-xl px-4 py-3 text-left transition-colors hover:bg-accent/10"
                >
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium text-foreground">
                      {item.label}
                    </span>

                    {item.description && (
                      <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                        {item.description}
                      </span>
                    )}
                  </span>

                  {item.shortcut && (
                    <kbd className="shrink-0 rounded-md border border-border bg-surface px-2 py-1 text-xs text-muted-foreground">
                      {item.shortcut}
                    </kbd>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-border px-5 py-3 text-xs text-muted-foreground">
          <span>Navigate GrowthPilot quickly</span>

          <span className="flex items-center gap-2">
            <kbd className="rounded border border-border px-1.5 py-0.5">
              ESC
            </kbd>
            <span>to close</span>
          </span>
        </div>
      </div>
    </div>
  );
}