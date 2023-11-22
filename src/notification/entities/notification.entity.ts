import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../../user/entities/user.entity';

@Entity()
export class NotificationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @Column()
  date_time: Date;

  @Column()
  Recipient: string;

  @ManyToOne(() => UserEntity, (user) => user.notifications, { cascade: true })
  user_id: UserEntity;
}
