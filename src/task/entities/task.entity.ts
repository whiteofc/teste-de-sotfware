import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum Status {
    ACTIVE = "active",
    PENDING = "pending",
    CLOSE = "close",
    CANCEL = "cancel"
}

@Entity()
export class Task {
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
        type: "enum",
        enum: Status,
        default: Status.ACTIVE
    })
    status: Status;

    @Column()
    user: string;

}
