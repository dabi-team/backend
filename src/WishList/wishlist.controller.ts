import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { WishlistService } from './wishlist.service';

@Controller('wishlist')
export class WishlistController {
  constructor(private readonly appService: WishlistService) {}

  @Post('add')
  create(@Body() data: { userId: string; productId: string }) {
    return this.appService.create(data.userId, data.productId);
  }

  @Get('getAll/:userId')
  findAll(@Param('id') id: string) {
    return this.appService.findAll(id);
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
