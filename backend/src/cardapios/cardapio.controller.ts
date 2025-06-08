import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { CardapioService } from './cardapio.service';
import { Cardapio } from './cardapio.model';

@Controller('cardapios')
export class CardapioController {
  constructor(private readonly cardapioService: CardapioService) {}

  @Get()
  findAll(): Cardapio[] {
    return this.cardapioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Cardapio {
    return this.cardapioService.findOne(id);
  }

  @Post()
  create(@Body() data: Omit<Cardapio, 'id'>): Cardapio {
    return this.cardapioService.create(data);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<Cardapio>,
  ): Cardapio {
    return this.cardapioService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Cardapio {
    return this.cardapioService.delete(id);
  }
}
