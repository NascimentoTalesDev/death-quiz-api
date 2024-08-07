import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { QuizzesRepository } from './quizzes.repository';

@Injectable()
export class QuizzesService {
  constructor(private quizzesRepository: QuizzesRepository) {}

  async findLatestQuizzesAdded() {
    return await this.quizzesRepository.findLatestQuizzesAdded();
  }

  async findAllFavorites(userId: number) {
    return await this.quizzesRepository.findAllFavorites(userId);
  }

  async favorite(quizId: number, userId: number) {
    const favoriteUpdated = await this.quizzesRepository.favorite(
      quizId,
      userId,
    );
    return favoriteUpdated;
  }

  async like(quizId: number, userId: number) {
    const likeUpdated = await this.quizzesRepository.like(quizId, userId);
    return likeUpdated;
  }

  async unLike(quizId: number, userId: number) {
    const unLikeUpdated = await this.quizzesRepository.unLike(quizId, userId);
    return unLikeUpdated;
  }
  create(createQuizDto: CreateQuizDto) {
    return 'This action adds a new quiz';
  }

  async findAll() {
    return await this.quizzesRepository.findAll();
  }

  async findOne(id: number) {
    return await this.quizzesRepository.findOne(id);
  }

  update(id: number, updateQuizDto: UpdateQuizDto) {
    return `This action updates a #${id} quiz`;
  }

  remove(id: number) {
    return `This action removes a #${id} quiz`;
  }
}
