import { Injectable, NotFoundException } from '@nestjs/common';
import { Cardapio } from './cardapio.model';

@Injectable()
export class CardapioService {
  private cardapios: Cardapio[] = [];
  private idAtual = 1;

  findAll(): Cardapio[] {
    return this.cardapios;
  }

  findOne(id: number): Cardapio {
    const cardapio = this.cardapios.find((c) => c.id === id);
    if (!cardapio) throw new NotFoundException('Cardápio não encontrado');
    return cardapio;
  }

  create(data: Omit<Cardapio, 'id'>): Cardapio {
    const novoCardapio = { id: this.idAtual++, ...data };
    this.cardapios.push(novoCardapio);
    return novoCardapio;
  }

  update(id: number, data: Partial<Cardapio>): Cardapio {
    const index = this.cardapios.findIndex((c) => c.id === id);
    if (index === -1) throw new NotFoundException('Cardápio não encontrado');
    this.cardapios[index] = { ...this.cardapios[index], ...data };
    return this.cardapios[index];
  }

  delete(id: number): Cardapio {
    const index = this.cardapios.findIndex((c) => c.id === id);
    if (index === -1) throw new NotFoundException('Cardápio não encontrado');
    const removido = this.cardapios.splice(index, 1);
    return removido[0];
  }
}
