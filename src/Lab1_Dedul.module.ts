import { Module } from '@nestjs/common';
import { AppController } from './Lab1_Dedul.controller';
import { AppService } from './Lab1_Dedul.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
