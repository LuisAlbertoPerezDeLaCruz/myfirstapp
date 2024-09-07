import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { FindOneParams } from './dtos/find-one-params';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  users = [];

  @Get('')
  @HttpCode(200)
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get('/:id')
  @HttpCode(200)
  async getUser(@Param() params: FindOneParams) {
    const user = await this.usersService.getUser(params.id);
    if (!user) {
      throw new BadRequestException('Invalid user');
    }
    return user;
  }

  @Post()
  @HttpCode(204)
  async createUser(@Body() body: CreateUserDto) {
    const newUser = await this.usersService.createUser(body);
    return newUser;
  }
}
