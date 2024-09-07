import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { FindOneParams } from './dtos/find-one-params';
import { UpdateUserDto } from './dtos/update-user.dto';

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
    const user = await this.usersService.createUser(body);
    if (!user) {
      throw new BadRequestException('Invalid request');
    }
    return user;
  }

  @Put('/:id')
  @HttpCode(204)
  async updateUser(
    @Body() body: UpdateUserDto,
    @Param() params: FindOneParams,
  ) {
    const user = await this.usersService.updateUser(body, params.id);
    if (!user) {
      throw new BadRequestException('Invalid request');
    }
    return user;
  }

  @Patch('update-age/:id')
  @HttpCode(204)
  async updateUserAge(@Body() body: any, @Param() params: FindOneParams) {
    const user = await this.usersService.updateUserAge(body.age, params.id);
    if (!user) {
      throw new BadRequestException('Invalid request');
    }
    return user;
  }
}
