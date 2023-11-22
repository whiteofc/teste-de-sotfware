import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../../user/entities/user.entity';
import { taskEnum } from '../interfaces/task.enum';

@Entity()
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  due_date: Date;

  @Column()
  priority: number;

  @Column({
    type: 'enum',
    enum: taskEnum,
    default: taskEnum.ACTIVE,
  })
  status: taskEnum;

  @ManyToOne(() => UserEntity, (user) => user.tasksData, { cascade: true })
  user_id: UserEntity;
}
