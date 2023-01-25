import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateQuestionDto } from "../dto/create-qestion.dto";
import { QuestionService } from "../service/question.service";

@Controller('question')
export class QuestionController{

    constructor(private questionService: QuestionService){}

    @Post('')
    @UsePipes(ValidationPipe)
    saveQuestion(@Body() qustion: CreateQuestionDto){
        return this.questionService.createNewQuestion(qustion);
    }
}