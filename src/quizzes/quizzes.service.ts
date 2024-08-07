import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { QuizzesRepository } from './quizzes.repository';

@Injectable()
export class QuizzesService {

  constructor(private quizzesRepository: QuizzesRepository){}
  
  async findLatestQuizzesAdded() {    
    return await this.quizzesRepository.findLatestQuizzesAdded();
  }

  async findAllFavorites(userId: number) {    
    return await this.quizzesRepository.findAllFavorites(userId);
  }

  create(createQuizDto: CreateQuizDto) {
    return 'This action adds a new quiz';
  }

  async findAll(){
    return await this.quizzesRepository.findAll()
  }

  async findOne(id: number) {
    return await this.quizzesRepository.findOne(id)
  }

  update(id: number, updateQuizDto: UpdateQuizDto) {
    return `This action updates a #${id} quiz`;
  }

  remove(id: number) {
    return `This action removes a #${id} quiz`;
  }
}
