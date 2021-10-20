import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/Products/products.interface';
import { BuyNow } from './buynow.interface';

@Injectable()
export class BuynowService {
  constructor(
    @InjectModel('Products') private readonly productModel: Model<Product>,
    @InjectModel('BuyNow') private readonly cartModel: Model<BuyNow>,
  ) {}
  async create(
    userId: string,
    productId: string,
    quantity: number,
    status: boolean,
  ) {
    const product = await this.productModel.findOne({ _id: productId });
    const cartProduct = new this.cartModel({
      userId,
      productId,
      product,
      quantity,
      status,
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
  async update(data: any, id: string) {
    const product = await this.cartModel.findByIdAndUpdate(id, data, {
      new: true,
    });
  }
  async findOne(id: string) {
    const product = await this.cartModel.findOne({ _id: id });
    return product;
  }
}
