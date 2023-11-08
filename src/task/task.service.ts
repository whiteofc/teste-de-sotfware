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
      const task = await this.taskRepository.save(data);
    } catch (error) {
      throw new HttpException({message: 'Tarefa não pode ser criada'}, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    try {
      const task = await this.taskRepository.find();
      return task;
    } catch (error) {
      throw new HttpException({message: 'Dados não encontrados'}, HttpStatus.NOT_FOUND);
    }
  }

  async findOne(id: number) {
    try {
      return await this.taskRepository.findOne({
        where: {id}
      });
    } catch (error) {
      throw new HttpException({message: 'Dados não encontrados'}, HttpStatus.NOT_FOUND);
    }
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    try {
      const entity = Object.assign(new TaskEntity(), updateTaskDto);
      await this.taskRepository.save({
        ...entity,
        id,
      });
      const task = await this.taskRepository.findOne({where : {id}});
      return {task, message: 'Task atualizada com sucesso'};
    } catch (error) {
      throw new HttpException({message: 'Dados não forem atualizados'}, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: number) {
    try {
      await this.taskRepository.softDelete(id);
      return {message: 'Task deletada com sucesso'}
    } catch (error) {
      throw new HttpException({message: 'Não foi possível deletar a task'}, HttpStatus.BAD_REQUEST);
    }
  }
}

