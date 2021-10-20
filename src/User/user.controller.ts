import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly appService: UserService) {}
  @Post('add')
  create(@Body() createProductDto: CreateUserDto) {
    return this.appService.create(createProductDto);
  }

  @Get('getAllUser')
  findAll() {
    return this.appService.findAll();
  }
  @Get('getById/:id')
  findOne(@Param('id') id: string) {
    return this.appService.findOne(id);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() updateProductDto: CreateUserDto) {
    return this.appService.update(updateProductDto, id);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: string) {
    return this.appService.delete(id);
  }
}
