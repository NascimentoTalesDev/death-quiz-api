import { Module } from '@nestjs/common';
import { QuizzesService } from '../../domain/services/quizzes/quizzes.service';
import { QuizzesController } from '../../interfaces/controllers/quizzes/quizzes.controller';
import { PrismaService } from '../../domain/services/prisma/prisma.service';
import { QuizzesRepository } from '../../domain/repositories/quizzes/quizzes.repository';

@Module({
  controllers: [QuizzesController],
  providers: [QuizzesService, QuizzesRepository, PrismaService],
})
export class QuizzesModule {}
