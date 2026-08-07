# ADR-005 — Dashboard Data Service

**Status:** Accepted

**Date:** 2026-08-03

**Decision Type:** Data Access Architecture

---

# Context

The initial Dashboard implementation imported mock data directly into the Dashboard page.

Example:

```
Dashboard Page

↓

mockDashboard.ts
```

Although this approach accelerated early development, it tightly coupled the presentation layer to a specific data source.

Future migration to REST APIs, GraphQL, databases, or real-time services would require modifying presentation components.

---

# Decision

GrowthPilot introduces a dedicated Dashboard Data Service.

The Dashboard page retrieves all dashboard information through a single service interface.

Example:

```
Dashboard Page

↓

Dashboard Data Service

↓

Data Source
```

The Dashboard page is no longer responsible for knowing where data originates.

---

# Responsibilities

The Dashboard Data Service is responsible for:

- Providing dashboard KPIs
- Providing revenue data
- Providing activity data
- Providing AI action data
- Abstracting underlying data sources

The Dashboard page is responsible only for rendering the returned information.

---

# Architectural Flow

Current implementation:

```
Dashboard Page

↓

Dashboard Data Service

↓

Mock Dashboard Data
```

Future implementation:

```
Dashboard Page

↓

Dashboard Data Service

↓

REST API

↓

Database
```

The Dashboard page remains unchanged when the underlying implementation evolves.

---

# Benefits

The Dashboard Data Service provides:

- Separation of concerns
- Reduced coupling
- Easier testing
- Centralised data access
- Future API compatibility
- Simplified maintenance
- Consistent data access patterns

---

# Dependency Rules

Allowed:

```
Dashboard Page

↓

Dashboard Data Service
```

Not preferred:

```
Dashboard Page

↓

Mock Constants
```

Presentation components should not directly depend on implementation details.

---

# Future Evolution

The Dashboard Data Service may later include:

- API clients
- Authentication
- Request caching
- Retry logic
- Offline support
- WebSocket subscriptions
- Feature flags

These enhancements should occur within the service layer without requiring changes to presentation components.

---

# Consequences

Dashboard data retrieval becomes an infrastructure concern rather than a UI concern.

The presentation layer remains stable while the data layer evolves independently.

---

# Related Documents

- ADR-001 — Repository Architecture
- ADR-002 — Feature-First Architecture
- ADR-003 — Service-Oriented Architecture
- DASHBOARD_ARCHITECTURE.md
- SERVICE_LAYER_GUIDE.md