# GrowthPilot CRM Shared Framework

## Overview

The `shared` directory contains reusable UI components and utilities that are shared across all CRM modules.

The goal of this framework is to:

- Reduce duplicate code
- Maintain a consistent user interface
- Improve maintainability
- Accelerate feature development
- Provide a stable foundation for future CRM modules.

---

## Folder Structure

```text
shared/

components/
├── index.ts
├── SectionHeader.tsx
├── SearchBar.tsx
├── FilterPanel.tsx
├── DataTable.tsx
├── EntityWorkspace.tsx
├── EmptyState.tsx
└── LoadingState.tsx

hooks/

types/
```

---

## Component Responsibilities

### SectionHeader

Displays a standard page title, description, and optional actions.

---

### SearchBar

Provides a reusable search input with:

- Search icon
- Clear button
- Disabled state
- Configurable placeholder

---

### FilterPanel

Provides a consistent layout for filter controls and optional action buttons.

---

### DataTable

Provides a shared table layout including:

- Title
- Description
- Header row
- Responsive container
- Shared styling

Feature modules provide only the table rows.

---

### EntityWorkspace

Provides the standard CRM page layout:

- Header
- Search
- Filters
- Table
- Details

---

### EmptyState

Displays a consistent empty-state experience.

Supports:

- Title
- Description
- Optional icon
- Optional action button

---

### LoadingState

Displays reusable loading placeholders for asynchronous data.

---

## Development Standards

- Keep shared components presentation-focused.
- Business logic belongs in feature modules or services.
- Shared components should be generic and reusable.
- Favor composition over duplication.

---

## Naming Conventions

- Use PascalCase for component names.
- Export components through `components/index.ts`.
- Keep props strongly typed.
- Prefer explicit, descriptive prop names.

---

## Extension Guidelines

When adding new CRM features:

1. Check whether a shared component already solves the problem.
2. Extend shared components only if the change benefits multiple modules.
3. Avoid adding feature-specific business logic to shared components.
4. Preserve backward compatibility whenever possible.