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

export interface DashboardData {
  kpis: KPI[];
  activities: ActivityItem[];
}