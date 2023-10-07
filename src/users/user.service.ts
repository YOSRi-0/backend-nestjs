import { Injectable } from '@nestjs/common';
import { User } from 'src/typeorm/entities/user';
import { CreateUserDTO, UpdateUserDTO } from './user.dtos';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

// TODO : Remove password from response
// TODO : Add Column value rules
// TODO : HANDLE EDGE CASES

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDTO): Promise<User | null> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);
    const newUser = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });
    return this.userRepository.save(newUser);
  }

  async findAll(): Promise<User[] | null> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  async findOneByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOneBy({ email });
  }

  async update(id: number, updateUserDto: UpdateUserDTO): Promise<User> {
    const userToUpdate = await this.userRepository.findOneBy({ id });
    return this.userRepository.save({ ...userToUpdate, ...updateUserDto });
  }

  async delete(id: number): Promise<User | null> {
    const userToDelete = await this.userRepository.findOneBy({ id });

    await this.userRepository.delete(userToDelete);
    return userToDelete;
  }
}
