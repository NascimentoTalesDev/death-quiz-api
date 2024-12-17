import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { PrismaModule } from './app/prisma/prisma.module';
import { QuizzesModule } from './app/quizzes/quizzes.module';
import { UsersModule } from './app/users/users.module';
import { AuthService } from './domain/services/auth/auth.service';
import { AuthModule } from './app/auth/auth.module';
import { UsersService } from './domain/services/users/users.service';
import { UsersRepository } from './domain/repositories/users/users.repository';
import { PrismaService } from './app/prisma/prisma.service';
import { AppController } from './security/app.controller';
import { LocalStrategy } from './security/authentication/Jwt/strategies/local.strategy';
import { JwtService } from '@nestjs/jwt';
import { QuestionsModule } from './app/questions/questions.module';
import { UploadsModule } from './app/uploads/uploads.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }) , PrismaModule, QuizzesModule, AuthModule, UsersModule, QuestionsModule, UploadsModule],
  controllers: [AppController],
  providers: [AppService, AuthService, UsersService, UsersRepository, PrismaService, LocalStrategy, JwtService],
})
export class AppModule {}
