import { Quiz } from "src/modules/quiz/entities/quiz.entity";
import { BaseEntity, Entity ,Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { Option } from "./option.entity";


@Entity('questions')
export class Question extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar'
    })
    question: string

    @ManyToOne(()=> Quiz, (quiz)=> quiz.questions)
    quiz: Quiz
    
    // @OneToMany(()=> Option,(option)=> option.question)
    // options: Option[];
}
