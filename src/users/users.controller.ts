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
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { FindOneParams } from './dtos/find-one-params';
import { UpdateUserDto } from './dtos/update-user.dto';
import { Request, Response } from 'express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  users = [];

  @Get('')
  @HttpCode(200)
  @ApiOperation({ summary: 'Gets all users' })
  @ApiResponse({ status: 200, description: 'Return all users' })
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get('/:id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Gets user by id' })
  async getUser(@Param() params: FindOneParams) {
    const user = await this.usersService.getUser(params.id);
    if (!user) {
      throw new BadRequestException('Invalid user');
    }
    return user;
  }

  @Post()
  @HttpCode(204)
  createUser(@Body() body: CreateUserDto, @Res() response: Response) {
    this.usersService
      .createUser(body)
      .then((user) => {
        return response.status(200).json({
          user: user,
          message: 'User Created',
        });
      })
      .catch((err) => {
        return response.status(404).json({
          message: err.message,
        });
      });
  }

  @Put('/:id')
  @HttpCode(204)
  updateUser(
    @Body() body: UpdateUserDto,
    @Param() params: FindOneParams,
    @Res() response: Response,
  ) {
    this.usersService
      .updateUser(body, params.id)
      .then((user) => {
        return response.status(200).json({
          user: user,
          message: 'User data updated',
        });
      })
      .catch((err) => {
        return response.status(404).json({
          message: err.message,
        });
      });
  }

  @Patch('update-age/:id')
  @HttpCode(204)
  updateUserAge(
    @Body() body: any,
    @Param() params: FindOneParams,
    @Res() response: Response,
  ) {
    this.usersService
      .updateUserAge(body.age, params.id)
      .then((user) => {
        return response.status(200).json({
          user: user,
          message: 'age updated',
        });
      })
      .catch((err) => {
        return response.status(404).json({
          message: err.message,
        });
      });
  }
}
