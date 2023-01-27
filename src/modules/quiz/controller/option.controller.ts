import { Body, Controller, Post, UsePipes, ValidationPipe  } from "@nestjs/common";
import { CreateOptionDto } from "../dto/create-option.dto";
import { OptionService } from "../service/option.service";

@Controller('question/option')
export class OptionController{
   
    constructor(private optionService: OptionService){}

    @UsePipes(ValidationPipe)
    @Post('')
    async createQuiz(@Body() createOptionDto: CreateOptionDto ){
        //return await this.optionService.createNewOption(createOptionDto);
        return createOptionDto;
    }
}