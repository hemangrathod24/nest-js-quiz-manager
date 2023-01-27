import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Option } from "../entities/option.entity";
import { Repository } from "typeorm";
import { CreateOptionDto } from "../dto/create-option.dto";

export class OptionService {

    constructor(@InjectRepository(Option) private optionRepository: Repository<Option>,){}
 
    // async createNewOption(option: CreateOptionDto){
    //     return await this.optionRepository.save(option);
    //   }
}