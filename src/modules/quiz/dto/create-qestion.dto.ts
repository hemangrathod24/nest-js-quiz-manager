import { IsNotEmpty, Length } from "class-validator";

export class CreateQuestionDto {
    
    @IsNotEmpty()
    quizId: number;
    
    @IsNotEmpty()
    @Length(3,255)
    question: string;


    
}