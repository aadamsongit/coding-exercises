import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CaregiversModule } from './caregivers/caregivers.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [AuthModule, UsersModule, CaregiversModule, BookingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
