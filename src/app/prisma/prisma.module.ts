import { Module } from '@nestjs/common';
import { PrismaService } from '../../domain/services/prisma/prisma.service';

@Module({
  providers: [PrismaService],
})
export class PrismaModule {}
