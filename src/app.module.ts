import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaModule } from './app/prisma/prisma.module';
import { QuizzesModule } from './quizzes/quizzes.module';
import { UsersModule } from './app/users/users.module';
import { AuthService } from './domain/services/auth/auth.service';
import { AuthModule } from './app/auth/auth.module';
import { UsersService } from './domain/services/users/users.service';
import { UsersRepository } from './domain/repositories/users/users.repository';
import { PrismaService } from './domain/services/prisma/prisma.service';
import { AppController } from './security/app.controller';
import { LocalStrategy } from './security/authentication/Jwt/strategies/local.strategy';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule, QuizzesModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, AuthService, UsersService, UsersRepository, PrismaService, LocalStrategy, JwtService],
})
export class AppModule {}
