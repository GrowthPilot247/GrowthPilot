import { NotificationItem } from "../components/NotificationCenter";
import { CalendarEvent } from "../components/CalendarWidget";
import { TaskItem } from "../components/TasksWidget";

export const notifications: NotificationItem[] = [
  {
    id: "1",
    title: "Campaign Published",
    description: "Summer Growth Campaign is now live.",
    time: "5 min ago",
    type: "success",
  },
  {
    id: "2",
    title: "Revenue Target Alert",
    description: "Monthly revenue has reached 82% of target.",
    time: "30 min ago",
    type: "info",
  },
  {
    id: "3",
    title: "Subscription Renewal",
    description: "Your Pro plan renews in 3 days.",
    time: "Today",
    type: "warning",
  },
];

export const calendarEvents: CalendarEvent[] = [
  {
    id: "1",
    title: "Sales Team Meeting",
    date: "Today",
    time: "10:00 AM",
    category: "meeting",
  },
  {
    id: "2",
    title: "Launch Summer Campaign",
    date: "Tomorrow",
    time: "2:00 PM",
    category: "campaign",
  },
  {
    id: "3",
    title: "Renew Pro Subscription",
    date: "Aug 5",
    time: "9:00 AM",
    category: "billing",
  },
];

export const tasks: TaskItem[] = [
  {
    id: "1",
    title: "Review Marketing Proposal",
    due: "Due Today",
    completed: false,
    priority: "High",
  },
  {
    id: "2",
    title: "Follow up with John Smith",
    due: "Tomorrow",
    completed: false,
    priority: "Medium",
  },
  {
    id: "3",
    title: "Update CRM Pipeline",
    due: "Completed",
    completed: true,
    priority: "Low",
  },
  {
    id: "4",
    title: "Approve Facebook Campaign",
    due: "Today",
    completed: false,
    priority: "High",
  },
];