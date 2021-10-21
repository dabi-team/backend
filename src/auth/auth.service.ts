import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common';
import { Model } from 'mongoose';
import { User } from 'src/User/user.interface';
import { AuthUser } from './auth.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('Auth') private readonly authModel: Model<AuthUser>,
    @InjectModel('Users') private readonly userModel: Model<User>,
  ) {}
  async create(data: any) {
    const createdCat = new this.authModel({
      email: data.email,
      password: data.password,
    });

    const auth = await createdCat.save();
    const user = new this.userModel({
      email: auth.email,
      userId: auth.id,
      name: data.name,
      number: data.number,
    });

    await user.save();

    return {
      email: auth.email,
      password: auth.password,
      userId: auth._id,
      name: user.name,
      number: user.number,
    };
  }
  async findOne(condition: any) {
    return this.authModel.findOne(condition);
  }
  async findOneUser(condition: any) {
    return this.userModel.findOne(condition);
  }
}
