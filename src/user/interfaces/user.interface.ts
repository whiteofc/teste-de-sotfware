import { NotificationInterface } from '../../notification/interfaces/notification.interface';
import { TaskInterface } from '../../task/interfaces/task.interface';

export interface UserInterface {
  id: number;
  name: string;
  email: string;
  password: string;
  tasksData: TaskInterface[];
  notificationsData: NotificationInterface[];
}
