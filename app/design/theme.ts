/**
 * ==========================================================
 * GrowthPilot Design System (GPDS)
 * Theme v1.0
 * ==========================================================
 */

import { colors } from "./colors";
import { typography } from "./typography";
import { spacing } from "./spacing";
import { radius } from "./radius";
import { shadows } from "./shadows";
import { motion } from "./motion";
import { breakpoints } from "./breakpoints";

export const theme = {
  colors,
  typography,
  spacing,
  radius,
  shadows,
  motion,
  breakpoints,
} as const;

export type Theme = typeof theme;