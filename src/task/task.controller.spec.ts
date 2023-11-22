import { Test, TestingModule } from '@nestjs/testing';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { taskEnum } from './interfaces/task.enum';
import { TaskEntity } from './entities/task.entity';

describe('TaskController', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const mockTaskService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  let controller: TaskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [
        {
          provide: TaskService,
          useValue: mockTaskService,
        },
      ],
    }).compile();

    controller = module.get<TaskController>(TaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('create => should create a new user by a given data', async () => {
    // arrange
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const createTaskDto = {
      title: 'Hello World',
      description: 'boa noite',
      due_date: '22/12/1999',
      priority: 1,
      status: taskEnum.ACTIVE,
      user_id: 1,
      // eslint-disable-next-line prettier/prettier
    } as unknown as CreateTaskDto;

    const task = {
      id: Number,
      title: 'Hello World',
      description: 'boa noite',
      due_date: '22/12/1999',
      priority: 1,
      status: taskEnum.ACTIVE,
      user_id: 1,
      // eslint-disable-next-line prettier/prettier
    } as unknown as TaskEntity;

    jest.spyOn(mockTaskService, 'create').mockReturnValue(task);

    // act
    const result = await controller.create(createTaskDto);

    // assert
    expect(mockTaskService.create).toBeCalled();
    expect(mockTaskService.create).toBeCalledWith(createTaskDto);

    expect(result).toEqual(task);
  });

  it('create => Should create a new user and return its data', async () => {
    // arrange
    const createTaskDto = {
      title: 'Hello World',
      description: 'boa noite',
      due_date: '22/12/1999',
      priority: 1,
      status: taskEnum.ACTIVE,
      user_id: 1,
      // eslint-disable-next-line prettier/prettier
    } as unknown as CreateTaskDto;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const task = {
      id: Number,
      title: 'Hello World',
      description: 'boa noite',
      due_date: '22/12/1999',
      priority: 1,
      status: taskEnum.ACTIVE,
      user_id: 1,
      // eslint-disable-next-line prettier/prettier
    } as unknown as TaskEntity;

    // act
    const result = await controller.create(createTaskDto);

    // assert
    expect(mockTaskService.create).toBeCalled();
    expect(mockTaskService.create).toBeCalledWith(createTaskDto);

    expect(result).toEqual(task);
  });

  it('findAll => should return an array of user', async () => {
    //arrange
    const task = {
      id: Number,
      title: 'Hello World',
      description: 'boa noite',
      due_date: '22/12/1999',
      priority: 1,
      status: taskEnum.ACTIVE,
      user_id: 1,
      // eslint-disable-next-line prettier/prettier
    };
    const tasks = [task];
    jest.spyOn(mockTaskService, 'findAll').mockReturnValue(tasks);

    //act
    const result = await controller.findAll();

    // assert
    expect(result).toEqual(tasks);
    expect(mockTaskService.findAll).toBeCalled();
  });

  it('findOne => should find a user by a given id and return its data', async () => {
    //arrange
    const id = '1';
    const task = {
      id: 1,
      title: 'Hello World',
      description: 'boa noite',
      due_date: '22/12/1999',
      priority: 1,
      status: taskEnum.ACTIVE,
      user_id: 1,
    };

    jest.spyOn(mockTaskService, 'findOne').mockReturnValue(task);

    //act
    const result = await controller.findOne(id);

    expect(result).toEqual(task);
    expect(mockTaskService.findOne).toBeCalled();
    expect(mockTaskService.findOne).toBeCalledWith(+id);
  });

  it('update => Should update a user', async () => {
    // arrange
    const id = '1';
    const updateTaskDto = {
      title: 'Hello World',
      description: 'boa noite',
      due_date: '22/12/1999',
      priority: 1,
      status: taskEnum.ACTIVE,
      user_id: 1,
      // eslint-disable-next-line prettier/prettier
    } as unknown as CreateTaskDto;

    const task = {
      id: Number,
      title: 'Hello World',
      description: 'boa noite',
      due_date: '22/12/1999',
      priority: 1,
      status: taskEnum.ACTIVE,
      user_id: 1,
      // eslint-disable-next-line prettier/prettier
    } as unknown as TaskEntity;

    jest.spyOn(mockTaskService, 'update').mockResolvedValue(task);

    // act
    const result = await controller.update(id, updateTaskDto);

    // assert
    expect(result).toEqual(task);

    expect(mockTaskService.update).toBeCalled();
    expect(mockTaskService.update).toBeCalledWith(+id, updateTaskDto);
  });

  it('remove => Should delete a user', async () => {
    // arrange
    const id = '1';
    const task = {
      id: Number,
      title: 'Hello World',
      description: 'boa noite',
      due_date: '22/12/1999',
      priority: 1,
      status: taskEnum.ACTIVE,
      user_id: 1,
      // eslint-disable-next-line prettier/prettier
    } as unknown as CreateTaskDto;

    jest.spyOn(mockTaskService, 'remove').mockResolvedValue(task);

    // act
    const result = await controller.remove(id);

    // assert
    expect(result).toEqual(task);

    expect(mockTaskService.remove).toBeCalled();
    expect(mockTaskService.remove).toBeCalledWith(+id);
  });
});
