import { Module } from '@nestjs/common';
import { UsersService } from '../../domain/services/users/users.service';
import { UsersController } from '../../interfaces/controllers/users/users.controller';
import { UsersRepository } from '../../domain/repositories/users/users.repository';
import { PrismaService } from 'src/app/prisma/prisma.service';
import { AuthService } from 'src/domain/services/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { LocalStrategy } from 'src/security/authentication/Jwt/strategies/local.strategy';

@Module({
  controllers: [UsersController],
  providers: [AuthService, UsersService, UsersRepository, PrismaService, LocalStrategy, JwtService],
  exports:[UsersService]
})
export class UsersModule {}
