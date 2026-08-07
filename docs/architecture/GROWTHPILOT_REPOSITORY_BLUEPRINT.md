# GrowthPilot Repository Blueprint

**Document ID:** GP-DOC-001

**Version:** 1.0

**Status:** Active

**Owner:** GrowthPilot Engineering

---

# Purpose

This document defines the official repository structure for the GrowthPilot platform.

It serves as the primary architectural reference for all engineers, contributors, and AI development assistants working on the project.

Every implementation must align with the structure and principles described in this document.

---

# Repository Overview

```
GrowthPilot/
│
├── app/
├── docs/
├── public/
├── node_modules/
├── package.json
├── README.md
└── ...
```

---

# Documentation Structure

```
docs/
│
├── architecture/
├── engineering/
├── roadmap/
└── standards/
```

Purpose of each folder:

## architecture/

Contains system architecture documentation.

Examples:

- Repository Blueprint
- Dashboard Architecture
- Service Layer Guide
- AI Architecture
- CRM Architecture

---

## engineering/

Contains engineering processes.

Examples:

- Engineering Standards
- Coding Guidelines
- Pull Request Standards
- Repository Workflow

---

## roadmap/

Contains implementation planning.

Examples:

- Sprint Plans
- Mission Plans
- Feature Roadmaps
- Product Roadmap

---

## standards/

Contains project-wide standards.

Examples:

- Naming Standards
- Folder Standards
- TypeScript Standards
- UI Standards

---

# Application Structure

```
app/
│
├── assets/
├── auth/
├── components/
├── config/
├── constants/
├── dashboard/
├── design/
├── design-system/
├── docs/
├── features/
├── hooks/
├── lib/
├── marketing/
├── services/
├── store/
├── styles/
├── types/
└── utils/
```

---

# Feature-Based Architecture

Every business module should live inside:

```
app/features/
```

Current modules include:

- Academy
- AI
- Analytics
- Authentication
- Billing
- CRM
- Dashboard
- Marketplace
- Settings

Each feature should be internally organized as:

```
feature/

components/

services/

hooks/

types/

constants/

settings/
```

---

# Dashboard Module

Current structure:

```
app/features/dashboard/

components/

constants/

hooks/

services/

settings/

types/
```

The Dashboard module is the reference implementation for future GrowthPilot modules.

---

# Service-Oriented Architecture

GrowthPilot follows a service-oriented architecture.

UI Components must never contain business logic.

Instead:

```
UI

↓

Services

↓

Data Sources

↓

Infrastructure
```

Business rules belong inside services.

---

# Documentation Policy

Every significant architectural change must be reflected in the documentation before a release.

Engineering documentation is considered part of the source code.

---

# Repository Principles

GrowthPilot follows these principles:

- Feature-first architecture
- Service-oriented design
- Strong typing
- Reusable components
- Repository-first engineering
- Documentation-driven development

---

# Revision History

| Version | Date | Description |
|----------|------|-------------|
| 1.0 | 2026-08-03 | Initial repository blueprint |