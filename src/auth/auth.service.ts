/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common';
import { Model } from 'mongoose';
import { User } from './auth.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('NewUser') private readonly userModel: Model<User>,
  ) {}
  async create(data: any) {
    const createdCat = new this.userModel(data);

    return await createdCat.save();
  }
  async findOne(condition: any) {
    return this.userModel.findOne(condition);
  }
}
