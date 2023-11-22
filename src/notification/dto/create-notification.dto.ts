import { IsNotEmpty } from 'class-validator';

export class CreateNotificationDto {
  @IsNotEmpty({ message: 'O usuário não pode ser vazio' })
  message: string;

  @IsNotEmpty({ message: 'A data e hora não pode ser vazia' })
  date_time: Date;

  @IsNotEmpty({ message: 'O destinatário não pode ser vazio' })
  Recipient: string;
}
