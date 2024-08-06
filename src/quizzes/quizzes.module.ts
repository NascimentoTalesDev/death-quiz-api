import { Module } from '@nestjs/common';
import { QuizzesController } from './quizzes.controller';
import { QuizzesService } from './quizzes.service';
import { QuizzesRepository } from 'src/repository/prisma/QuizzesRepository';
import { PrismaService } from 'src/prisma/prisma.service';


@Module({
  controllers: [QuizzesController],
  providers: [QuizzesService, QuizzesRepository, PrismaService],
})
export class QuizzesModule {}
