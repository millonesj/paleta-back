import { Controller, Get, Post,Put, Delete, Body, Param } from '@nestjs/common';

@Controller('proyects')
export class ProyectsController {
  @Post()
    createProyect():string {
      return `Created new Proyect`
  }
  @Get()
  getAllProyects(): string {
    return `All the Proyects!`;
  }
  @Put(':id')
  editProyect( @Param('id') idProyect: string ): string {
    return `edited  proyect ${idProyect}`;
  }
  @Delete(':id')
  removeProyect( @Param('id') idProyect: string): string {
    return `proyect removed ${idProyect}`;
  }
}
