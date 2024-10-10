import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from '../../../interfaces/dtos/questions/create-question.dto';
import { UpdateQuestionDto } from '../../../interfaces/dtos/questions/update-question.dto';
import { QuestionsRepository } from 'src/domain/repositories/questions/questions.repository';

@Injectable()
export class QuestionsService {
  constructor(private questionsRepository: QuestionsRepository) {}

  async create(createQuestionDto: CreateQuestionDto) {
    return await this.questionsRepository.create(createQuestionDto);
  }

  findAll() {
    return `This action returns all questions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} question`;
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
