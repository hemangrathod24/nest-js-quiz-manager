import { BaseEntity, Entity ,Column, PrimaryGeneratedColumn } from "typeorm";


@Entity('questions')
export class Question extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar'
    })
    question: string
}
