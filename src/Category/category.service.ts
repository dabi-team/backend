import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from './category.interface';
// Category
@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('Category') private readonly userModel: Model<Category>,
  ) {}

  async create(date: any) {
    const product = new this.userModel(date);
    return await product.save();
  }
  async findAll() {
    const product = await this.userModel.find().exec();
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
