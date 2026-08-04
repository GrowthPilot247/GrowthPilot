# GrowthPilot CRM Architecture

**Document ID:** GP-CRM-001

**Version:** 1.0

**Status:** Active

**Owner:** GrowthPilot Engineering

---

# Purpose

This document defines the architecture of the GrowthPilot Customer Relationship Management (CRM) platform.

The CRM is responsible for managing the complete customer lifecycle—from lead generation through opportunity management, customer relationships, and long-term account growth.

The CRM is designed as a core platform capability and integrates with Executive Intelligence, Analytics, Marketing, Finance, AI, and Billing.

---

# Business Vision

The GrowthPilot CRM provides a unified workspace for sales, marketing, customer success, and executives.

Its objectives are to:

- Capture leads
- Qualify opportunities
- Track customer interactions
- Manage sales pipelines
- Forecast revenue
- Support AI-assisted selling
- Deliver executive insights

---

# Module Location

```
app/features/crm/
```

---

# Module Structure

```
crm/

components/

services/

types/

hooks/

constants/

mock/

settings/

README.md

index.ts
```

---

# Architectural Principles

The CRM follows:

- Feature-first architecture
- Service-oriented design
- Strong TypeScript typing
- Repository-first engineering
- Documentation-driven development
- Separation of concerns

---

# Domain Model

The CRM is built around the following business entities:

```
CRM

├── Contact
├── Company
├── Lead
├── Opportunity
├── Deal
├── Pipeline
├── Activity
├── Task
├── Note
└── Tag
```

Each entity owns its own domain model.

---

# Service Layer

The CRM Service Layer contains all business logic.

Planned services include:

- crm-data.service.ts
- contact.service.ts
- company.service.ts
- lead.service.ts
- opportunity.service.ts
- pipeline.service.ts
- activity.service.ts
- task.service.ts

Presentation components must not contain business rules.

---

# Component Layer

The component layer is responsible only for presentation.

Examples:

- ContactList
- ContactProfile
- LeadList
- LeadDetails
- OpportunityBoard
- PipelineBoard
- CompanyProfile
- ActivityTimeline
- TaskPanel

Components consume services rather than data sources.

---

# Data Flow

```
CRM Page

↓

CRM Components

↓

CRM Services

↓

Mock Data

↓

Future REST API

↓

Database
```

The presentation layer remains unchanged as the underlying data source evolves.

---

# Mock Data Strategy

Unlike the Dashboard, CRM mock data is stored in a dedicated folder.

```
mock/

contacts.mock.ts

companies.mock.ts

leads.mock.ts

opportunities.mock.ts
```

The `constants` folder is reserved for true constants only.

---

# Integration Points

The CRM integrates with:

- Executive Intelligence
- Dashboard
- Marketing
- Analytics
- Finance
- Billing
- AI Platform

This ensures customer data becomes a shared business asset across GrowthPilot.

---

# Future Roadmap

Future capabilities include:

- AI Lead Scoring
- Customer Health Score
- Revenue Forecasting
- Workflow Automation
- Email Integration
- Calendar Synchronization
- Document Management
- Predictive Opportunity Scoring

---

# Revision History

| Version | Date | Description |
|----------|------|-------------|
| 1.0 | 2026-08-03 | Initial CRM architecture |