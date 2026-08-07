# ADR-006 — Engineering Workflow

**Status:** Accepted

**Date:** 2026-08-03

**Decision Type:** Engineering Process

---

# Context

As GrowthPilot evolved, a consistent engineering workflow became necessary to ensure predictable implementation, high code quality, and maintainable architecture.

Without a defined process, implementation approaches may vary, resulting in inconsistent code, unclear dependencies, and increased technical debt.

This ADR formalizes the engineering workflow adopted by the GrowthPilot project.

---

# Decision

All engineering work shall follow a standardized implementation lifecycle.

Every mission, sprint, bug fix, enhancement, refactoring, and architectural change follows the same workflow.

---

# Engineering Lifecycle

## Phase 1 — Repository Trace

Identify:

- Exact repository path
- Current file
- Parent module
- Dependencies
- Consumers

No implementation begins before repository verification.

---

## Phase 2 — Dependency Analysis

Determine:

- Imported modules
- Modules importing the target
- Service dependencies
- Shared type dependencies

Every implementation must understand its surrounding architecture.

---

## Phase 3 — Impact Analysis

Assess:

- Files affected
- Modules affected
- Risk level
- Potential regressions

Risk Levels:

- Low
- Medium
- High

---

## Phase 4 — Implementation

Choose the appropriate implementation strategy.

### Complete Replacement

Preferred for:

- Services
- Types
- Documentation
- Components requiring multiple unrelated modifications

### Targeted Replacement

Preferred for:

- Small isolated updates
- Single JSX blocks
- Individual functions
- Minor import changes

---

## Phase 5 — Verification

Every implementation must be verified.

Typical verification:

```bash
npm run dev
```

Verification includes:

- TypeScript compilation
- Application startup
- UI rendering
- Runtime validation

---

## Phase 6 — Documentation

Architecture or engineering changes require documentation updates.

Possible updates include:

- Repository Blueprint
- Architecture Guides
- ADRs
- Roadmaps
- Engineering Standards

Documentation is considered part of the implementation.

---

## Phase 7 — Version Control

Only verified work should be committed.

Recommended workflow:

```bash
git add .

git commit -m "<mission-id>: <summary>"

git push
```

Each commit should represent one logical, completed unit of work.

---

# Engineering Principles

GrowthPilot engineering is guided by:

- Repository-first development
- Feature-first architecture
- Service-oriented design
- Separation of concerns
- Strong typing
- Documentation-driven development
- Incremental delivery
- Continuous verification

---

# Benefits

This workflow provides:

- Predictable implementation
- Consistent architecture
- Easier code reviews
- Reduced technical debt
- Better onboarding
- Improved maintainability
- Higher implementation quality

---

# Future Evolution

This workflow will evolve as GrowthPilot grows.

Potential additions include:

- Automated testing standards
- CI/CD pipeline requirements
- Performance review checklists
- Security review process
- Release management workflow
- Code review guidelines

Updates should be reflected in the Engineering Standards document and future ADRs.

---

# Related Documents

- ENGINEERING_STANDARDS.md
- GROWTHPILOT_REPOSITORY_BLUEPRINT.md
- SERVICE_LAYER_GUIDE.md
- IMPLEMENTATION_ROADMAP.md