import { Lead } from "../components/RecentLeads";
import { PipelineStage } from "../components/SalesPipeline";

export const recentLeads: Lead[] = [
  {
    id: "1",
    name: "John Smith",
    company: "Acme Inc.",
    owner: "Mackson Alex",
    value: 24000,
    status: "Qualified",
    lastActivity: "10 min ago",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    company: "TechLabs",
    owner: "Grace Adams",
    value: 12500,
    status: "New",
    lastActivity: "30 min ago",
  },
  {
    id: "3",
    name: "David Brown",
    company: "Growth Ltd",
    owner: "Daniel James",
    value: 45800,
    status: "Proposal Sent",
    lastActivity: "1 hour ago",
  },
];

export const pipelineStages: PipelineStage[] = [
  {
    id: "1",
    stage: "New",
    deals: 18,
    value: 120000,
    progress: 24,
  },
  {
    id: "2",
    stage: "Qualified",
    deals: 14,
    value: 210000,
    progress: 46,
  },
  {
    id: "3",
    stage: "Proposal",
    deals: 8,
    value: 185000,
    progress: 32,
  },
  {
    id: "4",
    stage: "Negotiation",
    deals: 5,
    value: 140000,
    progress: 18,
  },
  {
    id: "5",
    stage: "Won",
    deals: 3,
    value: 95000,
    progress: 10,
  },
];