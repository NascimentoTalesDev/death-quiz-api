import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { QuestionsService } from '../../domain/services/questions/questions.service';
import { QuestionsController } from '../../interfaces/controllers/questions/questions.controller';
import { QuestionsRepository } from 'src/domain/repositories/questions/questions.repository';

@Module({
  controllers: [QuestionsController],
  providers: [PrismaService, QuestionsService, QuestionsRepository],

})
export class QuestionsModule {}
