import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    private logger = new Logger(PrismaService.name)

    async onModuleInit() {
        try {
            this.logger.log("Success")
        } catch (error) {
            this.logger.error("Error")
        }
    }
}
