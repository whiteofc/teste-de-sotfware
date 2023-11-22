import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(userData: CreateUserDto) {
    try {
      const user = await this.userRepository.save(userData);

      return { user, message: 'User created successfully' };
    } catch (error) {
      throw new HttpException(
        { message: 'Error creating user' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll() {
    try {
      const users = await this.userRepository.find();

      return { users, message: 'Users found successfully' };
    } catch (error) {
      throw new HttpException(
        { message: 'Error finding users' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findOne(id: number) {
    try {
      const user = await this.userRepository.findOne({ where: { id } });

      return { user, message: 'User found successfully' };
    } catch (error) {
      throw new HttpException(
        { message: 'Error finding user' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.userRepository.findOne({ where: { id } });

      if (!user) {
        throw new HttpException(
          { message: 'User not found' },
          HttpStatus.NOT_FOUND,
        );
      }

      await this.userRepository.update(id, updateUserDto);

      return { user, message: 'User updated successfully' };
    } catch (error) {
      throw new HttpException(
        { message: 'Error updating user' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async remove(id: number) {
    try {
      const user = await this.userRepository.delete({ id });

      return { user, message: 'User deleted successfully' };
    } catch (error) {
      throw new HttpException(
        { message: 'Error deleting user' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
