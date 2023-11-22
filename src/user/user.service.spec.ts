import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';

describe('UserService', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const mockUserRepository = {
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    delete: jest.fn(),
    update: jest.fn(),
  };

  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(UserEntity),
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const CreateUserDto = {
      name: 'Kayo',
      email: 'kayo@gmail.com',
      password: '123456',
      taskData: [
        {
          title: 'Hello World',
          description: 'boa noite',
          due_date: '22/12/1999',
          priority: 1,
          status: 1,
        },
      ],
      notificationData: [
        {
          message: 'Hello World',
          notification: 'boa noite',
          date_time: '22/12/1999',
          Recipient: 'Chadwick Boseman',
        },
      ],
    } as unknown as CreateUserDto;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const user = {
      id: Number,
      name: 'Kayo',
      email: 'kayo@gmail.com',
      password: '123456',
      taskData: [
        {
          title: 'Hello World',
          description: 'boa noite',
          due_date: '22/12/1999',
          priority: 1,
          status: 1,
        },
      ],
      notificationData: [
        {
          message: 'Hello World',
          notification: 'boa noite',
          date_time: '22/12/1999',
          Recipient: 'Chadwick Boseman',
        },
      ],
    } as unknown as UserEntity;

    jest.spyOn(mockUserRepository, 'save').mockReturnValue(user);

    // act
    const result = await service.create(CreateUserDto);

    // assert
    expect(mockUserRepository.save).toBeCalled();
    expect(mockUserRepository.save).toBeCalledWith(CreateUserDto);

    expect(result).toEqual(
      expect.objectContaining({
        user,
      }),
    );
  });

  it('findAll => Should return all users', async () => {
    // arrange
    const user = {
      id: Number,
      name: 'Kayo',
      email: 'kayo@gmail.com',
      password: '123456',
      taskData: [
        {
          title: 'Hello World',
          description: 'boa noite',
          due_date: '22/12/1999',
          priority: 1,
          status: 1,
        },
      ],
      notificationData: [
        {
          message: 'Hello World',
          notification: 'boa noite',
          date_time: '22/12/1999',
          Recipient: 'Chadwick Boseman',
        },
      ],
    } as unknown as UserEntity;

    const users = [user, user];

    jest.spyOn(mockUserRepository, 'find').mockReturnValue(users);

    // act

    const result = await service.findAll();

    // assert

    expect(mockUserRepository.find).toBeCalled();
    expect(mockUserRepository.find).toBeCalledWith();

    expect(result).toEqual(
      expect.objectContaining({
        users,
      }),
    );
  });

  it('findOne => Should return a user by id', async () => {
    // arrange
    const user = {
      id: Number,
      name: 'Kayo',
      email: 'kayo@gmail.com',
      password: '123456',
      taskData: [
        {
          title: 'Hello World',
          description: 'boa noite',
          due_date: '22/12/1999',
          priority: 1,
          status: 1,
        },
      ],
      notificationData: [
        {
          message: 'Hello World',
          notification: 'boa noite',
          date_time: '22/12/1999',
          Recipient: 'Chadwick Boseman',
        },
      ],
    } as unknown as UserEntity;

    jest.spyOn(mockUserRepository, 'findOne').mockReturnValue(user);

    // act

    const result = await service.findOne(1);

    // assert

    expect(mockUserRepository.findOne).toBeCalled();

    expect(mockUserRepository.findOne).toBeCalledWith({ where: { id: 1 } });

    expect(result).toEqual(
      expect.objectContaining({
        user,
      }),
    );
  });

  it('update => Should update a user by id', async () => {
    // arrange
    const user = {
      id: Number,
      name: 'Kayo',
      email: 'kayo@gmail.com',
      password: '123456',
      taskData: [
        {
          title: 'Hello World',
          description: 'boa noite',
          due_date: '22/12/1999',
          priority: 1,
          status: 1,
        },
      ],
      notificationData: [
        {
          message: 'Hello World',
          notification: 'boa noite',
          date_time: '22/12/1999',
          Recipient: 'Chadwick Boseman',
        },
      ],
    } as unknown as UserEntity;

    jest.spyOn(mockUserRepository, 'update').mockReturnValue(user);

    // act

    const result = await service.update(1, user);

    // assert

    expect(mockUserRepository.update).toBeCalled();
    expect(mockUserRepository.update).toBeCalledWith(1, user);

    expect(result).toEqual(
      expect.objectContaining({
        user,
      }),
    );
  });

  it('remove => Should delete a user by id', async () => {
    // arrange
    const user = {
      id: Number,
      name: 'Kayo',
      email: 'kayo@gmail.com',
      password: '123456',
      taskData: [
        {
          title: 'Hello World',
          description: 'boa noite',
          due_date: '22/12/1999',
          priority: 1,
          status: 1,
        },
      ],
      notificationData: [
        {
          message: 'Hello World',
          notification: 'boa noite',
          date_time: '22/12/1999',
          Recipient: 'Chadwick Boseman',
        },
      ],
    } as unknown as UserEntity;

    jest.spyOn(mockUserRepository, 'delete').mockReturnValue(user);

    // act

    const result = await service.remove(1);

    // assert

    expect(mockUserRepository.delete).toBeCalled();
    expect(mockUserRepository.delete).toBeCalledWith(
      expect.objectContaining({ id: 1 }),
    );

    expect(result).toEqual(
      expect.objectContaining({
        user,
      }),
    );
  });
});
