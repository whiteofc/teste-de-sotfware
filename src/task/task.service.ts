import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}
  async create(createTaskDto: CreateTaskDto) {
    try {
      const task = await this.taskRepository.save(createTaskDto);

      return { task, message: 'Task created successfully' };
    } catch (error) {
      throw new HttpException(
        { message: 'Error creating task' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll() {
    try {
      const tasks = await this.taskRepository.find();

      return { tasks, message: 'Tasks found successfully' };
    } catch (error) {
      throw new HttpException(
        { message: 'Error finding tasks' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findOne(id: number) {
    try {
      const task = await this.taskRepository.findOne({ where: { id } });

      return { task, message: 'Task found successfully' };
    } catch (error) {
      throw new HttpException(
        { message: 'Error finding task' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    try {
      const task = await this.taskRepository.update(id, updateTaskDto);

      return { task, message: 'Task updated successfully' };
    } catch (error) {
      throw new HttpException(
        { message: 'Error updating task' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async remove(id: number) {
    try {
      const task = await this.taskRepository.delete({ id });

      return { task, message: 'Task deleted successfully' };
    } catch (error) {
      throw new HttpException(
        { message: 'Error deleting task' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
