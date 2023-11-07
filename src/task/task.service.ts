import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './entities/task.entity'
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(@InjectRepository(TaskEntity)
  private readonly taskRepository: Repository<TaskEntity>
  ){}
  async create(data: CreateTaskDto) {
    try {
      const task = await this.taskRepository.save(data)
    } catch (error) {
      throw new HttpException({message: 'Tarefa não pode ser criada'}, HttpStatus.BAD_REQUEST)
    }
  }

  findAll() {
    return `This action returns all task`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
