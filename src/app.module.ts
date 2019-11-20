import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProyectsController } from './proyects/proyects.controller';

@Module({
  imports: [],
  controllers: [AppController, ProyectsController],
  providers: [AppService],
})
export class AppModule {}
