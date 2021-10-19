import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Patch,
  Param,
  Body,
} from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly appService: CartService) {}

  @Post('add')
  create(@Body() data: { userId: string; productId: string }) {
    return this.appService.create(data.userId, data.productId);
  }

  @Get('getAll/:userId')
  findAll(@Param('id') id: string) {
    return this.appService.findAll(id);
  }

  @Patch('increase/:id')
  increase(@Param('id') id: string) {
    return this.appService.increase(id);
  }

  @Patch('decrease/:id')
  decrease(@Param('id') id: string) {
    return this.appService.decrease(id);
  }
  @Get('getById/:id')
  findOne(@Param('id') id: string) {
    return this.appService.findOne(id);
  }

  @Delete('remove/:id')
  delete(@Param('id') id: string) {
    return this.appService.delete(id);
  }
}
