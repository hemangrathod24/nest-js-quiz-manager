import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from 'src/modules/quiz/entities/quiz.entity';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from '../dto/create-qestion.dto';
import { Question } from '../entities/question.entity';

@Injectable()
export class QuestionService {

  constructor(@InjectRepository(Question) private questionRepository: Repository<Question>,){}

  
  async createNewQuestion(question: CreateQuestionDto, quiz: Quiz){
    const newQuestion =  await this.questionRepository.save({
        question: question.question
    });

    
    quiz.questions = [...quiz.questions, newQuestion];
    
    await quiz.save();
    return newQuestion;
}

   
}