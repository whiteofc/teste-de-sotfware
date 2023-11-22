import { Test, TestingModule } from '@nestjs/testing';
import { TaskService } from './task.service';
import { TaskEntity } from './entities/task.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { taskEnum } from './interfaces/task.enum';

describe('TaskService', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const mockUserRepository = {
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    delete: jest.fn(),
    update: jest.fn(),
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let service: TaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TaskService,
        {
          provide: getRepositoryToken(TaskEntity),
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    service = module.get<TaskService>(TaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create', () => {});

  it('findAll', () => {});
  it('findOne', () => {});
  it('update', () => {});
  it('remove', () => {});

  it('create => Should create a new user and return its data', async () => {
    // arrange
    const CreateTaskDto = {
      title: 'Hello World',
      description: 'boa noite',
      due_date: Date.now(),
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
      due_date: Date.now(),
      priority: 1,
      status: taskEnum.ACTIVE,
      user_id: 1,
    } as unknown as TaskEntity;

    jest.spyOn(mockUserRepository, 'save').mockReturnValue(task);

    // act
    const result = await service.create(CreateTaskDto);

    // assert
    expect(mockUserRepository.save).toBeCalled();
    expect(mockUserRepository.save).toBeCalledWith(CreateTaskDto);

    expect(result).toEqual(
      expect.objectContaining({
        task,
      }),
    );
  });

  it('findAll => Should return all tasks', async () => {
    // arrange
    const task = {
      id: Number,
      title: 'Hello World',
      description: 'boa noite',
      due_date: Date.now(),
      priority: 1,
      status: taskEnum.ACTIVE,
      user_id: 1,
    } as unknown as TaskEntity;

    const tasks = [task];

    jest.spyOn(mockUserRepository, 'find').mockReturnValue(tasks);

    // act
    const result = await service.findAll();

    // assert
    expect(mockUserRepository.find).toBeCalled();
    expect(mockUserRepository.find).toBeCalledWith();

    expect(result).toEqual(
      expect.objectContaining({
        tasks,
      }),
    );
  });

  it('findOne => Should return a task by its id', async () => {
    // arrange
    const task = {
      id: Number,
      title: 'Hello World',
      description: 'boa noite',
      due_date: Date.now(),
      priority: 1,
      status: taskEnum.ACTIVE,
      user_id: 1,
    } as unknown as TaskEntity;

    jest.spyOn(mockUserRepository, 'findOne').mockReturnValue(task);

    // act
    const result = await service.findOne(1);

    // assert
    expect(mockUserRepository.findOne).toBeCalled();
    expect(mockUserRepository.findOne).toBeCalledWith({ where: { id: 1 } });

    expect(result).toEqual(
      expect.objectContaining({
        task,
      }),
    );
  });

  it('update => Should update a task by its id', async () => {
    // arrange
    const task = {
      id: Number,
      title: 'Hello World',
      description: 'boa noite',
      due_date: Date.now(),
      priority: 1,
      status: taskEnum.ACTIVE,
      user_id: 1,
    } as unknown as TaskEntity;

    const UpdateTaskDto = {
      title: 'Hello World',
      description: 'boa noite',
      due_date: Date.now(),
      priority: 1,
      status: taskEnum.ACTIVE,
      user_id: 1,
    } as unknown as CreateTaskDto;

    jest.spyOn(mockUserRepository, 'update').mockReturnValue(task);

    // act
    const result = await service.update(task.id, UpdateTaskDto);

    // assert
    expect(mockUserRepository.update).toBeCalled();
    expect(mockUserRepository.update).toBeCalledWith(task.id, UpdateTaskDto);

    expect(result).toEqual(
      expect.objectContaining({
        task,
      }),
    );
  });

  it('remove => Should delete a user by id', async () => {
    // arrange
    const task = {
      id: Number,
      title: 'Hello World',
      description: 'boa noite',
      due_date: Date.now(),
      priority: 1,
      status: taskEnum.ACTIVE,
      user_id: 1,
    } as unknown as TaskEntity;

    jest.spyOn(mockUserRepository, 'delete').mockReturnValue(task);

    // act
    const result = await service.remove(1);

    // assert
    expect(mockUserRepository.delete).toBeCalled();
    expect(mockUserRepository.delete).toBeCalledWith(
      expect.objectContaining({ id: 1 }),
    );

    expect(result).toEqual(
      expect.objectContaining({
        task,
      }),
    );
  });
});
