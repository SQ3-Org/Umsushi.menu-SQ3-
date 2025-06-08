import { Injectable } from '@nestjs/common';
import { Categoria } from './categoria.model';

@Injectable()
export class CategoriasService {
  private categorias: Categoria[] = [
    { id: 1, nome: 'Sushis' },
    { id: 2, nome: 'Bebidas' },
  ];

  findAll(): Categoria[] {
    return this.categorias;
  }
}
