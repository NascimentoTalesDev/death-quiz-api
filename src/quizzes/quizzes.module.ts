import { Module } from '@nestjs/common';
import { QuizzesService } from './quizzes.service';
import { QuizzesController } from './quizzes.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { QuizzesRepository } from './quizzes.repository';

@Module({
  controllers: [QuizzesController],
  providers: [QuizzesService, QuizzesRepository, PrismaService],
})
export class QuizzesModule {}
