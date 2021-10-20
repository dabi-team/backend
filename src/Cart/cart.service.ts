import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/Products/products.interface';
import { Cart } from './cart.interface';

@Injectable()
export class CartService {
  constructor(
    @InjectModel('Products') private readonly productModel: Model<Product>,
    @InjectModel('Cart') private readonly cartModel: Model<Cart>,
  ) {}
  async create(userId: string, productId: string) {
    // const product = await this.productModel.findOne({ _id: productId });
    const prod = await this.cartModel.findOne({
      userId,
      productId,
    });
    if (prod) {
      return prod;
    }
    const product = await this.productModel.findOne({ _id: productId });
    const cartProduct = new this.cartModel({
      userId,
      productId,
      product,
      quantity: 1,
    });

    return await cartProduct.save();
  }
  async findAll(userId: string) {
    // console.log(userId);

    const product = await this.cartModel.find({
      userId: userId,
    });
    // console.log(product);

    return product;
  }
  async delete(id: string) {
    return await this.cartModel.findByIdAndRemove(id);
  }
  async increase(id: string) {
    const product = await this.cartModel.findOne({ _id: id });

    return await this.cartModel.findByIdAndUpdate(
      id,
      {
        quantity: product.quantity + 1,
      },
      {
        new: true,
      },
    );
  }
  async decrease(id: string) {
    const product = await this.cartModel.findOne({ _id: id });
    if (product.quantity === 1 || product.quantity === 0) {
      product.remove();
    } else {
      var value = product.quantity - 1;
      this.cartModel.findByIdAndUpdate(
        product._id,
        {
          quantity: value,
        },
        (err, doc) => {
          if (err) {
            console.log(err);
          } else {
            console.log(doc);
          }
        },
      );
    }
  }
  async findOne(id: string) {
    const product = await this.cartModel.findOne({ _id: id });
    return product;
  }
}
