import type { HTMLAttributes } from "react";

export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  time: string;
  unread: boolean;
}

export interface NotificationMenuProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "children"
  > {
  notifications: NotificationItem[];
  className?: string;
}
