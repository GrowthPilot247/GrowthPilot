export interface AIAction {
  id: string;
  title: string;
}

export interface AIAssistantProps {
  userName: string;
  actions: AIAction[];
}