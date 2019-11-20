import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProyectsController } from './proyects/proyects.controller';
import { ProyectsService } from './proyects/proyects.service';

@Module({
  imports: [],
  controllers: [AppController, ProyectsController],
  providers: [AppService, ProyectsService],
})
export class AppModule {}
