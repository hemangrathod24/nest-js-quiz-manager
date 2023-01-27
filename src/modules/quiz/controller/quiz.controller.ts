import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { QuizService } from '../service/quiz.service';
import { CreateQuizDto } from '../dto/create-quiz.dto';
import { UpdateQuizDto } from '../dto/update-quiz.dto';
import { Quiz } from '../entities/quiz.entity';

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

  @Get('/:id')
  async getQuizById(@Param ('id', ParseIntPipe) id: number): Promise<Quiz>{
    return await this.quizService.getQuizById(id);
  }
  
}
