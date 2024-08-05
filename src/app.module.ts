import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { QuizzesModule } from './quizzes/quizzes.module';

@Module({
  imports: [UsersModule, QuizzesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
