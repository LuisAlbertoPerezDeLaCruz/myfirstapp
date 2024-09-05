import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  users = [
    {
      id: 1,
      name: 'Joe Doe',
      phone: '1234567890',
    },
    {
      id: 2,
      name: 'Jane Doe',
      phone: '0987654321',
    },
  ];
  getUsers() {
    return this.users;
  }
}
