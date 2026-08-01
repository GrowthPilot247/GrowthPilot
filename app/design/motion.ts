/**
 * ==========================================================
 * GrowthPilot Design System (GPDS)
 * Motion Tokens v1.0
 * ==========================================================
 */

export const motion = {
  duration: {
    fast: "150ms",
    normal: "250ms",
    slow: "350ms",
  },

  easing: {
    standard: "ease",
    in: "ease-in",
    out: "ease-out",
    inOut: "ease-in-out",
  },

  transition: {
    default: "all 250ms ease",
    colors: "color 250ms ease, background-color 250ms ease",
    transform: "transform 250ms ease",
    opacity: "opacity 250ms ease",
  },
} as const;

export type Motion = typeof motion;