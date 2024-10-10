import { Module } from '@nestjs/common';
import { UploadsService } from 'src/domain/services/uploads/uploads.service';
import { UploadsController } from 'src/interfaces/controllers/uploads/uploads.controller';

@Module({
  controllers: [UploadsController],
  providers: [UploadsService],
})
export class UploadsModule {}
