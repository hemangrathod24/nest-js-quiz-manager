import { IsNotEmpty, Length } from "class-validator";

export class CreateQuizDto {

    @IsNotEmpty({message: 'The quiz should have title'})
    @Length(3,250)
    title: string;

    @IsNotEmpty()
    @Length(5)
    description: string;

}
