import { Module, Options } from '@nestjs/common';
import { QuizService } from './service/quiz.service';
import { QuizController } from './controller/quiz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { QuestionController } from './controller/question.controller';
import { Question } from './entities/question.entity';
import { QuestionService } from './service/question.service';
import { OptionController } from './controller/option.controller';
import { OptionService } from './service/option.service';
import { Option } from './entities/option.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz, Question,Option])],
  controllers: [QuizController, QuestionController,OptionController],
  providers: [QuizService, QuestionService,OptionService]
})
export class QuizModule {}





