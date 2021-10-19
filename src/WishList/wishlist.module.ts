import { WishlistService } from './wishlist.service';
import { WishlistController } from './wishlist.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from 'src/Products/schema';
import { WishlistSchema } from './schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Products', schema: ProductSchema },
      { name: 'Wishlists', schema: WishlistSchema },
    ]),
  ],
  controllers: [WishlistController],
  providers: [WishlistService],
})
export class WishlistModule {}
