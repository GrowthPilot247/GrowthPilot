import { Moon } from "lucide-react";

export function ThemeToggle() {
  return (
    <button className="rounded-lg p-2 transition hover:bg-accent">
      <Moon className="h-5 w-5" />
    </button>
  );
}