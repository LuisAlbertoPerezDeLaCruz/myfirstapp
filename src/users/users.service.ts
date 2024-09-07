import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entity';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  getUsers() {
    return this.prisma.user.findMany();
  }

  async getUser(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    return user;
  }

  async createUser(user: CreateUserDto) {
    try {
      const newUser = await this.prisma.user.create({ data: user });
      return newUser;
    } catch (error) {
      return null;
    }
  }

  async updateUser(user: UpdateUserDto, id: string) {
    try {
      const updatedUser = await this.prisma.user.update({
        where: {
          id: id,
        },
        data: user,
      });
      return updatedUser;
    } catch (error) {
      return null;
    }
  }

  updateUserAge(age: number, id: string) {
    try {
      const updatedUser = this.prisma.user.update({
        where: {
          id: id,
        },
        data: { age: age },
      });
      return updatedUser;
    } catch (error) {
      return null;
    }
  }
}
