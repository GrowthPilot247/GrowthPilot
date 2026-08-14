"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const storedTheme =
      window.localStorage.getItem("growthpilot-theme");

    if (storedTheme === "dark") {
      return true;
    }

    if (storedTheme === "light") {
      return false;
    }

    return window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggleTheme = () => {
    setDark((current) => {
      const nextDark = !current;

      window.localStorage.setItem(
        "growthpilot-theme",
        nextDark ? "dark" : "light"
      );

      return nextDark;
    });
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        dark
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      title={
        dark
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
    >
      {dark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}