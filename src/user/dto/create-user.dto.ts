import { IsArray, IsNotEmpty, ValidateNested } from 'class-validator';
import { CreateTaskDto } from '../../task/dto/create-task.dto';
import { CreateNotificationDto } from '../../notification/dto/create-notification.dto';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  name: string;

  @IsNotEmpty({ message: 'O email não pode ser vazio' })
  email: string;

  @IsNotEmpty({ message: 'A senha não pode ser vazia' })
  password: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateTaskDto)
  tasksData: CreateTaskDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateNotificationDto)
  notificationsData: CreateNotificationDto[];
}
