# ADR-003 — Service-Oriented Architecture

**Status:** Accepted

**Date:** 2026-08-03

**Decision Type:** Business Logic Architecture

---

# Context

GrowthPilot is designed as an enterprise-grade AI Business Growth Operating System.

As business capabilities expand, placing business logic inside UI components would make the system difficult to maintain, test, and scale.

To ensure consistency across all feature modules, GrowthPilot separates presentation from business logic.

---

# Decision

GrowthPilot adopts a **Service-Oriented Architecture**.

Business logic belongs exclusively inside services.

UI components are responsible only for:

- Rendering data
- Capturing user interaction
- Delegating work to services

---

# Architectural Flow

```
User Interface

↓

Application Services

↓

Business Engines

↓

Data Sources

↓

Infrastructure
```

---

# Responsibilities

## Components

Components are responsible for:

- Rendering UI
- User interaction
- Display logic
- Layout
- Accessibility

Components must **not** contain:

- Business calculations
- Decision-making logic
- Data orchestration
- Executive intelligence generation
- Risk calculations

---

## Services

Services are responsible for:

- Business rules
- Data aggregation
- Orchestration
- Calculations
- Executive intelligence
- KPI generation
- Decision support

Services act as the primary business layer of the platform.

---

## Business Engines

Business engines perform specialized calculations.

Examples include:

- Business Health Engine
- KPI Trend Engine
- Executive Alert Engine
- Recommendation Engine
- Risk Engine
- Opportunity Engine
- Priority Engine

Each engine has a single responsibility.

---

# Orchestration

Multiple business engines should not communicate directly unless there is a clearly defined orchestration relationship.

Preferred:

```
Executive Intelligence Service

├── Business Score Service
├── Recommendation Engine
├── Risk Engine
├── Opportunity Engine
├── Priority Engine
└── Executive Alert Engine
```

The orchestrator coordinates the engines and returns a unified result to the UI.

---

# Dependency Rules

## Components

Allowed:

```
Component

↓

Service
```

Not Allowed:

```
Component

↓

Business Engine
```

unless the engine itself is the service being intentionally consumed.

---

## Services

Allowed:

```
Service

↓

Service
```

when orchestration is required.

---

## Services

Not Allowed:

```
Service

↓

UI Component
```

---

# Benefits

This architecture provides:

- Separation of concerns
- Improved maintainability
- Easier testing
- Reusable business logic
- Cleaner components
- Better scalability
- Consistent implementation patterns

---

# Consequences

Business logic becomes centralized inside services, making the platform easier to evolve without widespread UI changes.

Future API integrations should occur within services so that presentation components remain unaffected.

---

# Related Documents

- ADR-001 — Repository Architecture
- ADR-002 — Feature-First Architecture
- SERVICE_LAYER_GUIDE.md
- DASHBOARD_ARCHITECTURE.md