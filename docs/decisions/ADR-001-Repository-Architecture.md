# ADR-001 — Repository Architecture

**Status:** Accepted

**Date:** 2026-08-03

**Decision Type:** Repository Structure

---

# Context

GrowthPilot is being developed as a modular, enterprise-grade AI Business Growth Operating System.

As the platform grows, maintaining a predictable repository structure is essential for scalability, maintainability, and onboarding new engineers.

---

# Decision

GrowthPilot adopts a Feature-First architecture.

Business capabilities are organized under:

```
app/features/
```

Each feature owns its own:

```
components/
services/
hooks/
types/
constants/
settings/
```

Shared functionality remains outside feature modules in dedicated shared folders.

Engineering documentation is stored at the repository root:

```
docs/
```

---

# Consequences

Benefits:

- Clear module ownership
- Reduced coupling
- Easier onboarding
- Scalable architecture
- Independent feature evolution

Trade-offs:

- More folders
- Slightly higher initial organization effort

These trade-offs are acceptable given the long-term goals of the project.

---

# Alternatives Considered

Monolithic structure with shared folders.

Rejected because business logic becomes difficult to maintain as the application grows.

---

# Related Documents

- GROWTHPILOT_REPOSITORY_BLUEPRINT.md
- ENGINEERING_STANDARDS.md