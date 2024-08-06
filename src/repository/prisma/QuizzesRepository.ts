import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class QuizzesRepository {
  constructor(private readonly prisma: PrismaService) {}

  create() {
    return 'This action adds a new quiz';
  }

  async findAll() {
    try {
        const allQuiz = await this.prisma.quiz.findMany();
        return allQuiz;
      } catch (error) {
        console.error('Error in findAll:', error);
        throw new InternalServerErrorException('Failed to fetch quizzes');
      }
  }

  findOne(id: number) {
    return `This action returns a #${id} quiz`;
  }

  update(id: number) {
    return `This action updates a #${id} quiz`;
  }

  remove(id: number) {
    return `This action removes a #${id} quiz`;
  }
}
