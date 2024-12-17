import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AppService } from './app.service';
import { QuizzesModule } from './app/quizzes/quizzes.module';
import { UsersModule } from './app/users/users.module';
import { AuthService } from './domain/services/auth/auth.service';
import { AuthModule } from './app/auth/auth.module';
import { UsersService } from './domain/services/users/users.service';
import { UsersRepository } from './domain/repositories/users/users.repository';
import { AppController } from './security/app.controller';
import { LocalStrategy } from './security/authentication/Jwt/strategies/local.strategy';
import { JwtService } from '@nestjs/jwt';
import { QuestionsModule } from './app/questions/questions.module';
import { UploadsModule } from './app/uploads/uploads.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }) , PrismaModule, QuizzesModule, AuthModule, UsersModule, QuestionsModule, UploadsModule],
  controllers: [AppController],
  providers: [AppService, AuthService, PrismaService, UsersService, UsersRepository, LocalStrategy, JwtService],
})
export class AppModule {}
