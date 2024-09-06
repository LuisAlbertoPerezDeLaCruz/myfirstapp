import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { FindOneParams } from './dtos/find-one-params';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  users = [];

  @Get('')
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get('/:id')
  getUser(@Param() params: FindOneParams) {
    return this.usersService.getUser(+params.id);
  }

  @Post()
  createUser(@Body() body: CreateUserDto) {
    return this.usersService.createUser(body);
  }
}
