export interface Todo {
  id?: string;
  description: string;
  completed: boolean;
  tabGroup?: string;
  dueDate?: Date;
  created?: Date;
}
