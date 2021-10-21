import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateProductDto } from './product.dto';
import { ProductsService } from './products.service';
@Controller('product')
export class ProductsController {
  constructor(private readonly appService: ProductsService) {}

  @Post('add')
  create(@Body() createProductDto: CreateProductDto) {
    return this.appService.create(createProductDto);
  }

  @Get('getAll')
  findAll() {
    return this.appService.findAll();
  }
  @Get('getAll/:id')
  findAllByCat(@Param('id') id: string) {
    return this.appService.findOneCat(id);
  }

  @Get('getById/:id')
  findOne(@Param('id') id: string) {
    return this.appService.findOne(id);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() updateProductDto: CreateProductDto) {
    return this.appService.update(updateProductDto, id);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: string) {
    console.log(id);

    return this.appService.delete(id);
  }
}
