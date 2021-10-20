import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateCategoryDto } from './category.dto';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly appService: CategoryService) {}

  @Post('add')
  create(@Body() createProductDto: CreateCategoryDto) {
    return this.appService.create(createProductDto);
  }

  @Get('getAll')
  findAll() {
    return this.appService.findAll();
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() updateProductDto: CreateCategoryDto) {
    return this.appService.update(updateProductDto, id);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: string) {
    return this.appService.delete(id);
  }
}
