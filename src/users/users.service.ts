import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users: User[] = [];

  getUsers(): User[] {
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
