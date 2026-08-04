# GrowthPilot Service Layer Guide

**Document ID:** GP-DOC-004

**Version:** 1.0

**Status:** Active

**Owner:** GrowthPilot Engineering

---

# Purpose

This document defines the architecture, responsibilities, and dependency rules for the GrowthPilot Service Layer.

The Service Layer is the core of the GrowthPilot platform. It contains all business logic, orchestration, calculations, and decision-making. UI components must never contain business rules.

---

# Service Layer Principles

The Service Layer follows these principles:

- Single Responsibility Principle
- Service-Oriented Architecture
- Feature-First Organization
- Strong Typing
- Reusable Business Logic
- Predictable Dependencies

---

# Dashboard Service Inventory

```
app/features/dashboard/services/
```

Current services:

```
business-health-engine.service.ts
business-score.service.ts
dashboard-data.service.ts
dashboard-kpi.service.ts
dashboard.service.ts
executive-alert-engine.service.ts
executive-brief-generator.service.ts
executive-intelligence.service.ts
kpi-trend-engine.service.ts
opportunity-engine.service.ts
priority-engine.service.ts
recommendation-engine.service.ts
risk-engine.service.ts
```

---

# Service Categories

## 1. Infrastructure Services

Purpose:

Provide data orchestration and shared dashboard functionality.

Services:

- dashboard.service.ts
- dashboard-data.service.ts

Responsibilities:

- Coordinate dashboard data retrieval
- Supply data to UI components
- Abstract data sources
- Hide implementation details from the presentation layer

---

## 2. Business Intelligence Services

Purpose:

Calculate business metrics and analytical information.

Services:

- business-health-engine.service.ts
- business-score.service.ts
- dashboard-kpi.service.ts
- kpi-trend-engine.service.ts

Responsibilities:

- Business scoring
- KPI calculations
- Trend analysis
- Health assessment
- Performance indicators

---

## 3. Executive Intelligence Services

Purpose:

Generate executive-level insights.

Services:

- executive-intelligence.service.ts
- executive-alert-engine.service.ts
- executive-brief-generator.service.ts

Responsibilities:

- Executive summaries
- Alert generation
- Executive dashboard orchestration
- AI-assisted insights

---

## 4. Decision Engine Services

Purpose:

Support executive decision-making.

Services:

- recommendation-engine.service.ts
- risk-engine.service.ts
- opportunity-engine.service.ts
- priority-engine.service.ts

Responsibilities:

- Recommendations
- Risk analysis
- Opportunity identification
- Priority ranking

---

# Dependency Rules

## Rule 1

Components must depend on services.

```
Component

↓

Service
```

Never:

```
Component

↓

Business Logic
```

---

## Rule 2

Services may depend on other services only when there is a clear orchestration relationship.

Example:

```
Executive Intelligence Service

↓

Business Score Service

↓

Business Health Engine
```

---

## Rule 3

Decision engines should not call one another directly.

Instead:

```
Decision Engine

↓

Executive Intelligence Service

↓

Decision Engine
```

The orchestrator coordinates the engines.

---

## Rule 4

Services must not import UI components.

Allowed:

```
Service

↓

Service
```

Not allowed:

```
Service

↓

Component
```

---

## Rule 5

Mock data should remain behind the Service Layer.

Preferred:

```
UI

↓

Dashboard Data Service

↓

Mock Data
```

Future:

```
UI

↓

Dashboard Data Service

↓

REST API

↓

Database
```

This ensures the UI remains unchanged when real data sources are introduced.

---

# Service Lifecycle

Every new service should follow this lifecycle:

1. Define the responsibility.
2. Create or update domain types.
3. Implement the service.
4. Integrate through an orchestrator if applicable.
5. Connect to UI components.
6. Verify.
7. Document.

---

# Naming Standards

Infrastructure:

```
*.service.ts
```

Decision Engines:

```
*-engine.service.ts
```

Types:

```
*.types.ts
```

Hooks:

```
*.hook.ts
```

Utilities:

```
*.utils.ts
```

---

# Future Expansion

As GrowthPilot grows, additional service groups may include:

- CRM Services
- Marketing Services
- Finance Services
- Billing Services
- Marketplace Services
- Academy Services
- AI Automation Services

Each feature should follow the same architectural rules defined in this guide.

---

# Revision History

| Version | Date | Description |
|----------|------|-------------|
| 1.0 | 2026-08-03 | Initial Service Layer Guide |