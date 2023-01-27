import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuizDto } from '../dto/create-quiz.dto';
import { UpdateQuizDto } from '../dto/update-quiz.dto';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuizService {

  constructor(@InjectRepository(Quiz) private quizRepository: Repository<Quiz>,){}

  getAllQuiz(){
    return [1,2,3,4,'from service'];
  }

  async createNewQuiz(quiz: CreateQuizDto){
    return await this.quizRepository.save(quiz);
  }
 
  async getQuizById(id: number){
    return await this.quizRepository.findOne({where: {id}, relations: ['questions']})
  }
}


