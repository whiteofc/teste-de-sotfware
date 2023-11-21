import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { Task } from "src/task/entities/task.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    tasks: Task;

    @Column()
    notification: Notification;
}
