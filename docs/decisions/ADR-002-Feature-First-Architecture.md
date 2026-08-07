# ADR-002 — Feature-First Architecture

**Status:** Accepted

**Date:** 2026-08-03

**Decision Type:** Application Architecture

---

# Context

GrowthPilot is intended to become an enterprise-grade Business Growth Operating System composed of multiple business domains including CRM, AI, Marketing, Analytics, Finance, Billing, Marketplace, Academy, and Executive Intelligence.

A feature-oriented architecture provides stronger module boundaries than organizing the codebase solely by technical layers.

---

# Decision

GrowthPilot adopts a **Feature-First Architecture**.

Business capabilities are organized under:

```
app/features/
```

Each feature owns its implementation.

Example:

```
app/features/dashboard/
```

contains its own:

```
components/
services/
hooks/
types/
constants/
settings/
```

Feature modules should be independently understandable and maintainable.

---

# Principles

Each feature is responsible for:

- UI Components
- Business Logic
- Feature Types
- Feature Hooks
- Feature Settings
- Temporary Mock Data
- Feature Utilities

Whenever possible, code should remain inside its feature module.

---

# Shared Code

Only reusable functionality belongs outside feature modules.

Examples include:

```
app/components/
app/lib/
app/utils/
app/types/
app/hooks/
```

Shared code should not depend on feature modules.

---

# Benefits

- Clear ownership
- Reduced coupling
- Easier testing
- Improved scalability
- Independent feature evolution
- Better onboarding
- Simplified maintenance

---

# Trade-offs

Feature-first architecture introduces more folders and slightly more navigation compared to a flat structure.

These trade-offs are acceptable because GrowthPilot is designed as a long-term enterprise platform.

---

# Alternatives Considered

### Layer-Based Architecture

Example:

```
components/
services/
hooks/
types/
```

for the entire application.

Rejected because business logic becomes fragmented across unrelated folders.

---

# Related Documents

- ADR-001 — Repository Architecture
- GROWTHPILOT_REPOSITORY_BLUEPRINT.md
- DASHBOARD_ARCHITECTURE.md