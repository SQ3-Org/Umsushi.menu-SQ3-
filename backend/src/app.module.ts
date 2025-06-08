import { Module } from '@nestjs/common';
import { ProdutosController } from './produtos/produtos.controller';
import { ProdutosService } from './produtos/produtos.service';
import { CategoriasController } from './categorias/categorias.controller';
import { CategoriasService } from './categorias/categorias.service';
import { CardapioModule } from './cardapios/cardapio.module';

@Module({
  controllers: [ProdutosController, CategoriasController],
  providers: [ProdutosService, CategoriasService],
  imports: [CardapioModule],
})
export class AppModule {}
