import { DashboardData } from "../types/dashboard";

export const dashboardData: DashboardData = {
  kpis: [
    {
      id: "1",
      title: "Revenue",
      value: "$48,230",
      change: "+12%",
      trend: "up",
    },
    {
      id: "2",
      title: "Leads",
      value: "1,248",
      change: "+18%",
      trend: "up",
    },
    {
      id: "3",
      title: "Customers",
      value: "328",
      change: "+6%",
      trend: "up",
    },
    {
      id: "4",
      title: "Conversion",
      value: "7.4%",
      change: "-1.2%",
      trend: "down",
    },
  ],

  activities: [
    {
      id: "1",
      title: "New Lead",
      description: "John Doe signed up.",
      time: "2 min ago",
    },
    {
      id: "2",
      title: "Campaign Published",
      description: "Summer Promotion is live.",
      time: "25 min ago",
    },
    {
      id: "3",
      title: "Invoice Paid",
      description: "Premium subscription renewed.",
      time: "1 hour ago",
    },
  ],

  revenue: [
    { month: "Jan", revenue: 12000 },
    { month: "Feb", revenue: 18500 },
    { month: "Mar", revenue: 16200 },
    { month: "Apr", revenue: 24800 },
    { month: "May", revenue: 28900 },
    { month: "Jun", revenue: 34100 },
    { month: "Jul", revenue: 48230 },
  ],

  aiActions: [
    {
      id: "1",
      title: "Generate Marketing Campaign",
    },
    {
      id: "2",
      title: "Create Email Sequence",
    },
    {
      id: "3",
      title: "Analyze Revenue Trends",
    },
    {
      id: "4",
      title: "Recommend Next Business Action",
    },
  ],
};