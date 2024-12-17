import { Module } from '@nestjs/common';
import { QuestionsService } from '../../domain/services/questions/questions.service';
import { QuestionsController } from '../../interfaces/controllers/questions/questions.controller';
import { QuestionsRepository } from 'src/domain/repositories/questions/questions.repository';
import { PrismaService } from 'src/app/prisma/prisma.service';

@Module({
  controllers: [QuestionsController],
  providers: [QuestionsService, QuestionsRepository, PrismaService],
})
export class QuestionsModule {}
