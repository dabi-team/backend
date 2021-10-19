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
  ) {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await this.appService.findOne({ email });
    if (user) {
      throw new BadRequestException('user exist');
    }
    return this.appService.create({
      email,
      password: hashedPassword,
    });
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
    const jwt = await this.jwtService.signAsync({ id: user._id });
    // const hashedPassword = await bcrypt.hash(password, 12);

    return {
      ...user,
      jwt,
    };
  }
}