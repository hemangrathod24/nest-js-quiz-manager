import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { QuizService } from "src/modules/quiz/quiz.service";
import { CreateQuestionDto } from "../dto/create-qestion.dto";
import { QuestionService } from "../service/question.service";

@Controller('question')
export class QuestionController{

    constructor(private questionService: QuestionService, private quizService: QuizService){}

    @Post('')
    @UsePipes(ValidationPipe)
    async saveQuestion(@Body() qustion: CreateQuestionDto){
        const quiz = await this.quizService.getQuizById(qustion.quizId)
        return this.questionService.createNewQuestion(qustion,quiz);
    }
}