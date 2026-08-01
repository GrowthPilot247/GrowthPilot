/**
 * ==========================================================
 * GrowthPilot Design System (GPDS)
 * Shadow Tokens v1.0
 * ==========================================================
 */

export const shadows = {
  none: "none",

  sm: "0 1px 2px rgba(15, 23, 42, 0.05)",

  md: "0 4px 6px rgba(15, 23, 42, 0.07)",

  lg: "0 10px 15px rgba(15, 23, 42, 0.10)",

  xl: "0 20px 25px rgba(15, 23, 42, 0.12)",

  "2xl": "0 25px 50px rgba(15, 23, 42, 0.18)",

  inner: "inset 0 2px 4px rgba(15, 23, 42, 0.06)",
} as const;

export type Shadows = typeof shadows;