import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersRepository } from 'src/domain/repositories/users/users.repository';
import { AuthService } from 'src/domain/services/auth/auth.service';
import { PrismaService } from 'src/domain/services/prisma/prisma.service';
import { UsersService } from 'src/domain/services/users/users.service';
import { AuthController } from 'src/interfaces/controllers/auth/auth.controller';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AuthController],
  providers: [
    PrismaService,
    UsersRepository,
    AuthService,
    UsersService,
  ],
  exports: [AuthService],
})
export class AuthModule {}
