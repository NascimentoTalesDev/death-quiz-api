import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { QuizzesController } from '../../interfaces/controllers/quizzes/quizzes.controller';
import { QuizzesService } from '../../domain/services/quizzes/quizzes.service';
import { QuizzesRepository } from '../../domain/repositories/quizzes/quizzes.repository';

@Module({
  controllers: [QuizzesController],
  providers: [PrismaService, QuizzesService, QuizzesRepository],
  // providers: [QuizzesService, QuizzesRepository, PrismaService],
})
export class QuizzesModule {}
