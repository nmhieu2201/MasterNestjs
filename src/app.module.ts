import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventController } from './events.controller';
import configdatbase from './configdatabase';

@Module({
  imports: [TypeOrmModule.forRoot(configdatbase)],
  controllers: [AppController, EventController],
  providers: [AppService],
})
export class AppModule {}
