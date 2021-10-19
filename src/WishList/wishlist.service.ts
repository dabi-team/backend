import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart } from 'src/Cart/cart.interface';
import { Product } from 'src/Products/products.interface';
import { Wishlist } from './wishlist.interface';

@Injectable()
export class WishlistService {
  constructor(
    @InjectModel('Products') private readonly productModel: Model<Product>,
    @InjectModel('Wishlists') private readonly cartModel: Model<Wishlist>,
  ) {}
  async create(userId: string, productId: string) {
    const product = await this.productModel.findOne({ _id: productId });
    const cartProduct = new this.cartModel({
      userId,
      productId,
      product,
    });

    return await cartProduct.save();
  }
  async findAll(userId: string) {
    const product = await this.cartModel
      .find({
        userId: userId,
      })
      .exec();
    return product;
  }
  async delete(id: string) {
    return await this.cartModel.findByIdAndRemove(id);
  }
  async findOne(id: string) {
    const product = await this.cartModel.findOne({ _id: id });
    return product;
  }
}
