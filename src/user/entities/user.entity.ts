import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { NotificationEntity } from '../../notification/entities/notification.entity';
import { TaskEntity } from '../../task/entities/task.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => TaskEntity, (task) => task.user_id)
  tasksData: TaskEntity[];

  @OneToMany(() => NotificationEntity, (Notification) => Notification.user_id)
  notifications: Notification[];
}
