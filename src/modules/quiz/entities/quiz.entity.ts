import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { text } from "stream/consumers";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn ,OneToMany} from "typeorm";

@Entity('quizes')

export class Quiz extends BaseEntity{

    @PrimaryGeneratedColumn({
        comment: 'The quiz unique idetifier'
    })
    id: number;

    @Column({
        type: "varchar"
    })
    title: string;

    @Column({
        type: 'text'
    })
    description: string;

    @Column({
        type: "boolean",
        default: 1
    })
    isActive: boolean;


}
