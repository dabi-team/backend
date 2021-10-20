import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateBuyNowDto } from './buynow.dto';
import { BuynowService } from './buynow.service';

@Controller('buynow')
export class BuynowController {
  constructor(private readonly appService: BuynowService) {}

  @Post('add')
  create(
    @Body()
    data: {
      userId: string;
      productId: string;
      quantity: number;
      status: boolean;
    },
  ) {
    return this.appService.create(
      data.userId,
      data.productId,
      data.quantity,
      data.status,
    );
  }
  @Get('getAll/:userId')
  findAll(@Param('id') id: string) {
    return this.appService.findAll(id);
  }
  @Put('update/:id')
  update(@Param('id') id: string, @Body() updateProductDto: CreateBuyNowDto) {
    return this.appService.update(updateProductDto, id);
  }
  @Delete('remove/:id')
  delete(@Param('id') id: string) {
    return this.appService.delete(id);
  }
}
