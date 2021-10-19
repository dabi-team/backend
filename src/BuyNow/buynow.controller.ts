import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { BuynowService } from './buynow.service';

@Controller('buynow')
export class BuynowController {
  constructor(private readonly appService: BuynowService) {}

  @Post('add')
  create(
    @Body() data: { userId: string; productId: string; quantity: number },
  ) {
    return this.appService.create(data.userId, data.productId, data.quantity);
  }
  @Get('getAll/:userId')
  findAll(@Param('id') id: string) {
    return this.appService.findAll(id);
  }

  @Delete('remove/:id')
  delete(@Param('id') id: string) {
    return this.appService.delete(id);
  }
}
