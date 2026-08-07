# ADR-004 — Executive Copilot Architecture

**Status:** Accepted

**Date:** 2026-08-03

**Decision Type:** Executive Intelligence Architecture

---

# Context

GrowthPilot's Executive Copilot is the primary decision-support interface for business leaders.

Early implementations embedded static data directly into dashboard components. As executive capabilities expanded, this approach became difficult to maintain and prevented the addition of new intelligence engines.

A scalable architecture was required to support multiple sources of executive insight while keeping UI components simple.

---

# Decision

GrowthPilot adopts an orchestration-based Executive Copilot architecture.

The Executive Copilot UI communicates with a single orchestration service rather than directly consuming multiple business engines.

---

# Architecture

```
ExecutiveCopilotPanel

↓

Executive Intelligence Service

├── Business Score Service
├── Executive Brief Generator
├── Executive Alert Engine
├── Recommendation Engine
├── Risk Engine
├── Opportunity Engine
└── Priority Engine
```

The Executive Intelligence Service aggregates information from specialised services and returns a unified domain model for presentation.

---

# Responsibilities

## ExecutiveCopilotPanel

Responsible for:

- Rendering executive information
- Displaying recommendations
- Displaying priorities
- Displaying alerts
- Providing executive interaction

The component must not contain business calculations.

---

## Executive Intelligence Service

Responsible for:

- Aggregating executive information
- Coordinating specialised services
- Producing the Executive Intelligence model
- Providing a stable API to the presentation layer

---

## Supporting Services

### Business Score Service

Calculates executive business metrics.

### Executive Brief Generator

Produces executive summaries.

### Executive Alert Engine

Generates actionable executive alerts.

### Recommendation Engine

Produces recommended executive actions.

### Risk Engine

Identifies business risks.

### Opportunity Engine

Identifies business opportunities.

### Priority Engine

Produces executive priorities.

Each supporting service has a single responsibility.

---

# Dependency Rules

ExecutiveCopilotPanel depends only on:

```
Executive Intelligence Service
```

The Executive Intelligence Service is the only service responsible for coordinating executive business logic.

Supporting services should not communicate directly with UI components.

---

# Benefits

This architecture provides:

- Clear separation of concerns
- Reusable business services
- Simple presentation components
- Centralised orchestration
- Easier testing
- Easier future expansion
- Stable interface for future AI capabilities

---

# Future Evolution

The Executive Intelligence Service will eventually integrate:

- CRM intelligence
- Marketing intelligence
- Financial intelligence
- Predictive analytics
- AI agents
- Real-time notifications
- External business systems

without requiring significant changes to ExecutiveCopilotPanel.

---

# Consequences

Executive intelligence becomes a platform capability rather than a dashboard feature.

Additional intelligence engines can be introduced by extending the orchestration layer instead of modifying presentation components.

---

# Related Documents

- ADR-001 — Repository Architecture
- ADR-002 — Feature-First Architecture
- ADR-003 — Service-Oriented Architecture
- DASHBOARD_ARCHITECTURE.md
- SERVICE_LAYER_GUIDE.md