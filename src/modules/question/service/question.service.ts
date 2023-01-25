import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from '../dto/create-qestion.dto';
import { Question } from '../entities/question.entity';

@Injectable()
export class QuestionService {

  constructor(@InjectRepository(Question) private questionRepository: Repository<Question>,){}

  
  async createNewQuestion(question: CreateQuestionDto){
    return await this.questionRepository.save(question);
  }
 
}