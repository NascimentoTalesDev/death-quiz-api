import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { QuizzesModule } from './quizzes/quizzes.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UsersModule, QuizzesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
