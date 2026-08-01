/**
 * ==========================================================
 * GrowthPilot Design System (GPDS)
 * Breakpoint Tokens v1.0
 * ==========================================================
 */

export const breakpoints = {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

export type Breakpoints = typeof breakpoints;