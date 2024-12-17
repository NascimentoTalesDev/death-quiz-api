import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from 'src/interfaces/dtos/questions/create-question.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class QuestionsRepository {
  constructor(private prismaService: PrismaService) {}

  async create (createQuestionDto: CreateQuestionDto){
    const { quizId, correctAnswer, question, answers } =  createQuestionDto;

    const createdQuestion = await this.prismaService.question.create({
      data:{
        quizId: +quizId,
        correctAnswer,
        question,
      }
    });

    await Promise.all(answers.map(answer => 
      this.prismaService.answer.create({      
        data:{
          questionId: createdQuestion.id,
          answer : answer.text
        }
      })
    ));

    return createdQuestion
  }

  
}
