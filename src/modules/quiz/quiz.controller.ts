import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}


  @Get('/')
  getAllQuiz(){
    return this.quizService.getAllQuiz();
  }

  @UsePipes(ValidationPipe)
  @Post('/create')
  async createQuiz(@Body() quizdate: CreateQuizDto ){
    return await this.quizService.createNewQuiz(quizdate);
  }
}
