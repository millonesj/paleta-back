import { Controller, Get, Post,Put, Delete, Body, Param } from '@nestjs/common';
import { CreateProyectDto } from './dto/create-proyect'

@Controller('proyects')
export class ProyectsController {
  @Post()
    createProyect( @Body() proyectDto: CreateProyectDto ):string {
      return `Created new Proyect ${proyectDto.name}`
  }
  @Get()
  getAllProyects(): string {
    return `All the Proyects!`;
  }
  @Put(':id')
  editProyect( @Param('id') idProyect: string, @Body() proyectDto: CreateProyectDto  ): string {
    return `edited  proyect ${idProyect}`;
  }
  @Delete(':id')
  removeProyect( @Param('id') idProyect: string): string {
    return `proyect removed ${idProyect}`;
  }
}
