import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersRepository } from 'src/domain/repositories/users/users.repository';
import { AuthService } from 'src/domain/services/auth/auth.service';
import { UsersService } from 'src/domain/services/users/users.service';
import { AuthController } from 'src/interfaces/controllers/auth/auth.controller';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from 'src/security/authentication/Jwt/strategies/local.strategy';
import { JwtStrategy } from 'src/security/authentication/Jwt/strategies/jwt.strategy';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    PassportModule,
    JwtModule.register({
      privateKey: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    PrismaService,
    UsersRepository,
    UsersService,
    LocalStrategy,
    JwtStrategy
  ],
  exports: [AuthService],
})
export class AuthModule {}
