import { Injectable } from '@nestjs/common';
import { Quiz } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class QuizzesRepository {
  constructor(private prismaService: PrismaService) {}

  async findLatestQuizzesAdded(): Promise<Quiz[]> {
    const allQuiz = await this.prismaService.quiz.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 4,
      include: {
        questions: {
          include: {
            answers: true,
          },
        },
        favorites: true,
      },
    });
    return allQuiz;
  }

  async findAllFavorites(userId: number): Promise<Quiz[]> {
    const allQuiz = await this.prismaService.quiz.findMany({
      where: {
        favorites: {
          some: {
            userId,
          },
        },
      },
      include: {
        questions: {
          include: {
            answers: true,
          },
        },
        favorites: true,
      },
    });

    return allQuiz;
  }

  async findAll(): Promise<Quiz[]> {
    try {
      const allQuizzes = await this.prismaService.quiz.findMany({});
      console.log(allQuizzes);
      return allQuizzes;
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: number): Promise<Quiz> {
    try {
      const quiz = await this.prismaService.quiz.findUnique({
        where: {
          id,
        },
        include: {
          questions: {
            include: {
              answers: true,
            },
          },
          favorites: true,
          liked: true,
          unLiked: true,
        },
      });

      return quiz;
    } catch (error) {
      return null;
    }
  }


}
