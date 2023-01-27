
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

Entity('options')
export class Option extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;


    @Column({
        type: "varchar"
    })
    text: string;


    @Column({
        type: "boolean"
    })
    isCorrect: boolean;

}