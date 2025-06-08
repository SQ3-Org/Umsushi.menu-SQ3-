import { Controller, Get } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { Categoria } from './categoria.model';

@Controller('categorias')
export class CategoriasController {
  constructor(private readonly service: CategoriasService) {}

  @Get()
  findAll(): Categoria[] {
    return this.service.findAll();
  }
}
