import { Module } from '@nestjs/common';
import { QuizService } from './service/quiz.service';
import { QuizController } from './controller/quiz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { QuestionController } from './controller/question.controller';
import { Question } from './entities/question.entity';
import { QuestionService } from './service/question.service';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz, Question])],
  controllers: [QuizController, QuestionController],
  providers: [QuizService, QuestionService]
})
export class QuizModule {}
