export type RecurrencePattern = 'daily' | 'weekly' | 'monthly' | 'yearly' | 'none';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
  dueDate: string;
  recurrence: RecurrencePattern;
  description?: string;
}