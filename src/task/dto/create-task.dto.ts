import { IsEmpty, IsString, IsDate, IsInt, Min, Max} from "class-validator";

export class CreateTaskDto {
    @IsString({message: 'Seu titulo não é uma string válida'})
    @IsEmpty({message: 'Seu titulo está vazio'})
    title: string;

    @IsString({message: 'Sua descrição não é uma string válida'})
    @IsEmpty({message: 'Sua descrição está vazio'})
    description: string;

    @IsDate({message: 'Não é uma data'})
    duedate: Date;

    @IsInt({message: 'Não é um numero válido'})
    @Min(0)
    @Max(10)
    prioriy: number;

    @IsString({message: 'Seu status não é uma string válida'})
    @IsEmpty({message: 'Sua status está vazio'})
    status: string;
}
