export interface KPI {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
}

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  time: string;
}

export interface RevenueItem {
  month: string;
  revenue: number;
}

export interface AIAction {
  id: string;
  title: string;
}

export interface DashboardData {
  kpis: KPI[];
  activities: ActivityItem[];
  revenue: RevenueItem[];
  aiActions: AIAction[];
}