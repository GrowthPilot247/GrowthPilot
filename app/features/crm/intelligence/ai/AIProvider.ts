/**
 * ============================================================
 * GrowthPilot AI Provider Interface
 * ============================================================
 */

export interface AIRequest {
  prompt: string;

  context?: Record<string, unknown>;
}

export interface AIResponse {
  content: string;

  confidence?: number;
}

export interface AIProvider {
  generate(
    request: AIRequest
  ): Promise<AIResponse>;
}