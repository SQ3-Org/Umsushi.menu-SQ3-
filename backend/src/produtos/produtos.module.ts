// produtos.module.ts
import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { CategoriasService } from '../categorias/categorias.service'; // ✅

@Module({
  controllers: [ProdutosController],
  providers: [ProdutosService, CategoriasService], // ✅ injeta aqui
})
export class ProdutosModule {}
