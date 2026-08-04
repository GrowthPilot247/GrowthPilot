# GrowthPilot Engineering Standards

**Document ID:** GP-DOC-002

**Version:** 1.0

**Status:** Active

**Owner:** GrowthPilot Engineering

---

# Purpose

This document defines the official engineering workflow used throughout the GrowthPilot platform.

It establishes how all code, documentation, architecture changes, and implementation missions are executed.

These standards apply to every engineer and AI assistant contributing to the project.

---

# Engineering Principles

GrowthPilot engineering is based on the following principles:

- Repository-first development
- Architecture before implementation
- Service-oriented design
- Feature-first organization
- Documentation-driven development
- Type safety
- Incremental delivery
- Continuous verification

---

# Official Engineering Workflow

Every implementation follows the same lifecycle.

## Phase 1 — Repository Trace

Before writing code, identify:

- Exact repository path
- Current file
- Parent module
- Dependencies
- Consumers

Example:

```
Target File

app/features/dashboard/components/ExecutiveCopilotPanel.tsx
```

---

## Phase 2 — Dependency Analysis

Determine:

- Files imported
- Files importing this module
- Service dependencies
- Type dependencies

No implementation begins without dependency analysis.

---

## Phase 3 — Impact Analysis

Identify:

- Files affected
- Modules affected
- Risk level

Risk levels:

- Low
- Medium
- High

---

## Phase 4 — Replacement Strategy

GrowthPilot uses two implementation methods.

### Complete Replacement

Always used for:

- Services
- Types
- Documentation

Also used when a component requires changes in two or more independent sections.

Examples:

- Imports
- Constants
- JSX
- Functions
- State

---

### Targeted Replacement

Only used when:

- One isolated section changes.

Examples:

- Single JSX block
- Single function
- One import

---

# Repository Verification

Before every replacement verify:

- Correct repository path
- File exists
- Latest repository version
- Dependencies confirmed
- Impact analysed
- Replacement strategy selected

---

# Build Verification

Every implementation must be verified.

Typical verification:

```
npm run dev
```

Expected outcome:

- No TypeScript errors
- No build errors
- UI renders correctly

---

# Git Workflow

After successful verification:

```
git add .

git commit -m "<mission>"

git push
```

Commits must represent a completed, verified unit of work.

---

# Documentation Requirements

Every significant architectural or engineering decision must be documented.

Documentation is considered part of the implementation.

No major architectural change is complete until the documentation has been updated.

---

# Naming Standards

Services

```
*.service.ts
```

Decision Engines

```
*-engine.service.ts
```

Types

```
*.types.ts
```

Hooks

```
*.hook.ts
```

Utilities

```
*.utils.ts
```

Constants

```
*.constants.ts
```

---

# Repository Principles

GrowthPilot follows:

- Single Responsibility Principle
- Feature-first architecture
- Service-oriented design
- Reusable components
- Strong typing
- Predictable repository structure

---

# Engineering Rule

If uncertain:

Stop.

Trace the repository.

Never implement based on assumptions.

---

# Revision History

| Version | Date | Description |
|----------|------|-------------|
| 1.0 | 2026-08-03 | Initial engineering standards |