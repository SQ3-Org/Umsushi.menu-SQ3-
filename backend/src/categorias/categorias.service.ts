// categorias.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Categoria } from './categoria.model';

@Injectable()
export class CategoriasService {
  private categorias: Categoria[] = [];
  private idAtual = 1;

  findAll(): Categoria[] {
    return this.categorias;
  }

  findOne(id: number): Categoria {
    const cat = this.categorias.find((c) => c.id === id);
    if (!cat) throw new NotFoundException('Categoria não encontrada');
    return cat;
  }

  create(data: Omit<Categoria, 'id'>): Categoria {
    const nova = { id: this.idAtual++, ...data };
    this.categorias.push(nova);
    return nova;
  }
}