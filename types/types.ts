export interface Task {
  id?: string;
  title: string;
  description?: string | null;
  dueDate?: Date | null;
  priority: "NORMAL" | "URGENT" | "HIGH";
  status?: "TODO" | "DONE" | "ACTIVE";
}

export interface WeeklyStats {
  percentage: number;
  completed: number;
  total: number;
  // textDisplay: string;
}