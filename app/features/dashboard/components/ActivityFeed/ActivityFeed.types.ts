export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  time: string;
}

export interface ActivityFeedProps {
  items: ActivityItem[];
}