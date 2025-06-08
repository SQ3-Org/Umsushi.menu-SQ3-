import { Module } from '@nestjs/common';
import { CardapioService } from './cardapio.service';
import { CardapioController } from './cardapio.controller';

@Module({
  controllers: [CardapioController],
  providers: [CardapioService],
  exports: [CardapioService], // se quiser usar o serviço em outros módulos
})
export class CardapioModule {}
