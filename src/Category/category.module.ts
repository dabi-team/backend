import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { Module } from '@nestjs/common';
import { CategorySchema } from './schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Category', schema: CategorySchema }]),
  ],
  controllers: [CategoryController, CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
// import {
//   Controller,
//   Get,
//   Post,
//   Put,
//   Delete,
//   Body,
//   Param,
// } from '@nestjs/common';
// import { CreateCategoryDto } from './category.dto';
// import { CategoryService } from './category.service';

// @Controller('category')
// export class CategoryController {
//   constructor(private readonly appService: CategoryService) {}

//   @Post('add')
//   create(@Body() createProductDto: CreateCategoryDto) {
//     return this.appService.create(createProductDto);
//   }

//   @Get('getAll')
//   findAll() {
//     return this.appService.findAll();
//   }
//   @Get('getById/:id')
//   findOne(@Param('id') id: string) {
//     return this.appService.findOne(id);
//   }

//   @Put('update/:id')
//   update(@Param('id') id: string, @Body() updateProductDto: CreateCategoryDto) {
//     return this.appService.update(updateProductDto, id);
//   }

//   @Delete('delete/:id')
//   delete(@Param('id') id: string) {
//     return this.appService.delete(id);
//   }
// }
