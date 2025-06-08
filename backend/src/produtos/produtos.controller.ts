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
import { ProdutosService } from './produtos.service';
import { Produto } from './produto.model'; // ✅ importa do novo arquivo

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get()
  findAll(): Produto[] {
    return this.produtosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Produto {
    return this.produtosService.findOne(id);
  }

  @Post()
  create(@Body() body: Omit<Produto, 'id'>): Produto {
    return this.produtosService.create(body);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Partial<Produto>,
  ): Produto {
    return this.produtosService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Produto {
    return this.produtosService.delete(id);
  }
}
