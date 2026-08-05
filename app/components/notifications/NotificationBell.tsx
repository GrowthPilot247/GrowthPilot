import { Bell } from "lucide-react";

export function NotificationBell() {
  return (
    <button className="rounded-lg p-2 transition hover:bg-accent">
      <Bell className="h-5 w-5" />
    </button>
  );
}