import { taskEnum } from './task.enum';

export interface TaskInterface {
  id: number;
  title: string;
  description: string;
  due_date: Date;
  priority: number;
  status: taskEnum;
}
