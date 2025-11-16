import { Module } from '@nestjs/common';
import { CaregiversController } from './caregivers.controller';
import { CaregiversService } from './caregivers.service';

@Module({
  controllers: [CaregiversController],
  providers: [CaregiversService]
})
export class CaregiversModule {}
