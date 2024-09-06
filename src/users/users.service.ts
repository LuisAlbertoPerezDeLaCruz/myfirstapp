import { Injectable } from '@nestjs/common';
import { UserDto } from './dtos/user.dto';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  users: UserDto[] = [];

  getUsers(): UserDto[] {
    return this.users;
  }

  getUser(id: number) {
    const userFound = this.users.find((user) => {
      return user.id === id;
    });
    return userFound;
  }

  createUser(user: CreateUserDto) {
    this.users.push({
      ...user,
      id: this.users.length + 1,
    });
    return user;
  }
}
