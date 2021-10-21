import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './products.interface';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Products') private readonly userModel: Model<Product>,
  ) {}

  async create(date: any) {
    const product = new this.userModel(date);
    return await product.save();
  }

  async findAll() {
    const product = await this.userModel.find().exec();
    return product;
  }
  async findOneCat(id: string) {
    const product = await this.userModel.find({ category: id });
    console.log(product);

    return product;
  }
  async findOne(id: string) {
    const product = await this.userModel.findOne({ _id: id });
    console.log(product);

    return product;
  }

  async update(data: any, id: string) {
    const product = await this.userModel.findByIdAndUpdate(id, data, {
      new: true,
    });
  }

  async delete(id: string) {
    return await this.userModel.findByIdAndRemove(id);
  }
}
