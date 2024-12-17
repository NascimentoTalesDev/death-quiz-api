import { Module } from '@nestjs/common';
import { UsersService } from '../../domain/services/users/users.service';
import { UsersController } from '../../interfaces/controllers/users/users.controller';
import { UsersRepository } from '../../domain/repositories/users/users.repository';
import { AuthService } from 'src/domain/services/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { LocalStrategy } from 'src/security/authentication/Jwt/strategies/local.strategy';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [AuthService, PrismaService, UsersService, UsersRepository, LocalStrategy, JwtService],
  exports:[UsersService]
})
export class UsersModule {}
