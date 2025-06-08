import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { Categoria } from './categoria.model';

@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Get()
  findAll(): Categoria[] {
    return this.categoriasService.findAll();
  }

  @Post()
  create(@Body() data: Omit<Categoria, 'id'>): Categoria {
    return this.categoriasService.create(data);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Categoria {
    return this.categoriasService.findOne(+id);
  }
}
