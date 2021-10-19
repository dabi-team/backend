import { CategoryModule } from './Category/category.module';
import { UserModule } from './User/user.module';
import { WishlistModule } from './WishList/wishlist.module';
import { BuynowService } from './BuyNow/buynow.service';
import { BuynowController } from './BuyNow/buynow.controller';
import { BuynowModule } from './BuyNow/buynow.module';
import { CartModule } from './Cart/cart.module';
import { ProductsModule } from './Products/products.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    CategoryModule,
    UserModule,
    WishlistModule,
    BuynowModule,
    CartModule,
    ProductsModule,
    AuthModule,
    MongooseModule.forRoot(
      'mongodb+srv://haider:0111@cluster0.cyf8c.mongodb.net/dabi?authSource=admin&replicaSet=atlas-dzbwru-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true',
    ),
    JwtModule.register({
      secret: 'hackathon',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
