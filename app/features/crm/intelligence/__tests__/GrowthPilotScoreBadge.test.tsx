/**
 * ============================================================
 * GrowthPilot Score Badge Component Tests
 * ============================================================
 */

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { GrowthPilotScoreBadge } from "../components/GrowthPilotScoreBadge";

describe("GrowthPilotScoreBadge", () => {
  it("renders the score and grade", () => {
    render(
      <GrowthPilotScoreBadge
        score={94}
        grade="A"
      />
    );

    expect(
      screen.getByText("GrowthPilot Score")
    ).toBeDefined();

    expect(
      screen.getByText("94")
    ).toBeDefined();

    expect(
      screen.getByText("A")
    ).toBeDefined();
  });
});