import { Injectable, NotFoundException } from '@nestjs/common';
import { Produto } from './produto.model'; // ✅ importa do novo arquivo

@Injectable()
export class ProdutosService {
  private produtos: Produto[] = [];
  private idAtual = 1;

  findAll(): Produto[] {
    return this.produtos;
  }

  findOne(id: number): Produto {
    const produto = this.produtos.find((p) => p.id === id);
    if (!produto) throw new NotFoundException('Produto não encontrado');
    return produto;
  }

  create(data: Omit<Produto, 'id'>): Produto {
    const novoProduto = { id: this.idAtual++, ...data };
    this.produtos.push(novoProduto);
    return novoProduto;
  }

  update(id: number, data: Partial<Produto>): Produto {
    const index = this.produtos.findIndex((p) => p.id === id);
    if (index === -1) throw new NotFoundException('Produto não encontrado');
    this.produtos[index] = { ...this.produtos[index], ...data };
    return this.produtos[index];
  }

  delete(id: number): Produto {
    const index = this.produtos.findIndex((p) => p.id === id);
    if (index === -1) throw new NotFoundException('Produto não encontrado');
    const removido = this.produtos.splice(index, 1);
    return removido[0];
  }
}
