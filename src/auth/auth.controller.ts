import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly appService: AuthService,
    private readonly jwtService: JwtService,
  ) {}
  @Post('signup')
  async register(
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('name') name: string,
    @Body('number') number: string,
  ) {
    const hashedPassword = await bcrypt.hash(password, 12);

    const users = await this.appService.findOne({ email });
    console.log(users);

    if (users) {
      throw new BadRequestException('user exist');
    }
    console.log(name);
    console.log(number);

    const user = await this.appService.create({
      email,
      password: hashedPassword,
      name,
      number,
    });
    const jwt = await this.jwtService.signAsync({ id: user.userId });
    console.log(user);

    const cred = {
      user: {
        _id: user.userId,
        email: user.email,
        password: user.password,
        name: user.name,
        number: user.number,
      },
      jwt,
    };
    console.log(cred);

    return cred;
  }
  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const user = await this.appService.findOne({ email });
    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }
    if (!(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('Invalid credentials');
    }
    const cred = await this.appService.findOneUser({ userId: user._id });
    const jwt = await this.jwtService.signAsync({ id: user._id });

    return {
      user: {
        _id: user._id,
        email: user.email,
        password: user.password,
        name: cred.name,
        number: cred.number,
      },
      jwt,
    };
  }
}
