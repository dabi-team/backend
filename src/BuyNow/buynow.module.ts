import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from 'src/Products/schema';
import { BuynowController } from './buynow.controller';
import { BuynowService } from './buynow.service';
import { BuyNowSchema } from './schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Products', schema: ProductSchema },
      { name: 'BuyNow', schema: BuyNowSchema },
    ]),
  ],
  controllers: [BuynowController],
  providers: [BuynowService],
})
export class BuynowModule {}
