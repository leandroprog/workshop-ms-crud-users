import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = []; // Banco imaginário

  create(createUserDto: CreateUserDto) {
    const user = { id: randomUUID(), ...createUserDto };
    this.users.push({ ...user });
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    const user = this.users.find((u) => u.id === id);
    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const userIndex = this.users.findIndex((u) => u.id === id);
    const user = this.users[userIndex];

    this.users[userIndex] = { ...user, ...updateUserDto };
    return this.users[userIndex];
  }

  remove(id: string) {
    const userIndex = this.users.findIndex((u) => u.id === id);
    this.users.splice(userIndex, 1);
    return this.users;
  }
}
