/**
 * ==========================================================
 * GrowthPilot Design System (GPDS)
 * Color Tokens v1.0
 * ==========================================================
 */

export const colors = {
  brand: {
    primary: "#16A34A",      // Growth Green
    secondary: "#2563EB",    // Trust Blue
    accent: "#0EA5E9",       // Sky Blue
  },

  neutral: {
    white: "#FFFFFF",
    black: "#000000",

    50: "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0",
    300: "#CBD5E1",
    400: "#94A3B8",
    500: "#64748B",
    600: "#475569",
    700: "#334155",
    800: "#1E293B",
    900: "#0F172A",
  },

  semantic: {
    success: "#22C55E",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#3B82F6",
  },

  background: {
    light: "#FFFFFF",
    dark: "#020617",
    surface: "#FFFFFF",
    muted: "#F8FAFC",
  },

  text: {
    primary: "#0F172A",
    secondary: "#475569",
    muted: "#64748B",
    inverse: "#FFFFFF",
  },

  border: {
    light: "#E2E8F0",
    DEFAULT: "#CBD5E1",
    dark: "#334155",
  },
} as const;

export type Colors = typeof colors;