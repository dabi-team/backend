import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from 'src/Products/schema';
import { CartSchema } from './schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Products', schema: ProductSchema },
      { name: 'Cart', schema: CartSchema },
    ]),
  ],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
