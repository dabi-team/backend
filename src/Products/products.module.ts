import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './schema';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Products', schema: ProductSchema }]),
    // MulterModule.register({
    //   dest: './files',
    // }),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
