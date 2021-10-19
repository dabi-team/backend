/*
https://docs.nestjs.com/middleware#middleware
*/

import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}
  async use(req: Request, res: Response, next: Function) {
    console.log(req.headers.authorization);

    const token = await this.jwtService.verifyAsync(req.headers.authorization);
    if (!token) {
      // throw new UnauthorizedException();
      console.log('lol');
    }
    next();
  }
}
