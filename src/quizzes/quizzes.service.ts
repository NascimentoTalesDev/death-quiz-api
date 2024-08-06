import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class QuizzesService {

  constructor(private readonly prisma: PrismaService) {}

  create(createQuizDto: CreateQuizDto) {
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

  update(id: number, updateQuizDto: UpdateQuizDto) {
    return `This action updates a #${id} quiz`;
  }

  remove(id: number) {
    return `This action removes a #${id} quiz`;
  }
}
