import { IsNotEmpty } from 'class-validator';
import { taskEnum } from '../interfaces/task.enum';

export class CreateTaskDto {
  @IsNotEmpty({ message: 'O título não pode ser vazio' })
  title: string;

  @IsNotEmpty({ message: 'A descrição não pode ser vazia' })
  description: string;

  @IsNotEmpty({ message: 'A data de vencimento não pode ser vazia' })
  due_date: Date;

  @IsNotEmpty({ message: 'A prioridade não pode ser vazia' })
  priority: number;

  @IsNotEmpty({ message: 'O status não pode ser vazio' })
  status: taskEnum;
}
