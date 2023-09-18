export interface Todo {
  id?: number;
  description: string;
  completed: boolean;
  tabGroup?: string;
  dueDate?: Date;
  created?: Date;
}
