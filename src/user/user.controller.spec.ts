import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';

describe('UserController', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const mockUserService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: mockUserService,
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('create => should create a new user by a given data', async () => {
    // arrange
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const createUserDto = {
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
      // eslint-disable-next-line prettier/prettier
    } as unknown as CreateUserDto;

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
      // eslint-disable-next-line prettier/prettier
    } as unknown as UserEntity;

    jest.spyOn(mockUserService, 'create').mockReturnValue(user);

    // act
    const result = await controller.create(createUserDto);

    // assert
    expect(mockUserService.create).toBeCalled();
    expect(mockUserService.create).toBeCalledWith(createUserDto);

    expect(result).toEqual(user);
  });

  it('create => Should create a new user and return its data', async () => {
    // arrange
    const createUserDto = {
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
      // eslint-disable-next-line prettier/prettier
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
      // eslint-disable-next-line prettier/prettier
    } as unknown as UserEntity;

    // act
    const result = await controller.create(createUserDto);

    // assert
    expect(mockUserService.create).toBeCalled();
    expect(mockUserService.create).toBeCalledWith(createUserDto);

    expect(result).toEqual(user);
  });

  it('findAll => should return an array of user', async () => {
    //arrange
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
      // eslint-disable-next-line prettier/prettier
    };
    const users = [user];
    jest.spyOn(mockUserService, 'findAll').mockReturnValue(users);

    //act
    const result = await controller.findAll();

    // assert
    expect(result).toEqual(users);
    expect(mockUserService.findAll).toBeCalled();
  });

  it('findOne => should find a user by a given id and return its data', async () => {
    //arrange
    const id = '1';
    const user = {
      id: 1,
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
    };

    jest.spyOn(mockUserService, 'findOne').mockReturnValue(user);

    //act
    const result = await controller.findOne(id);

    expect(result).toEqual(user);
    expect(mockUserService.findOne).toBeCalled();
    expect(mockUserService.findOne).toBeCalledWith(+id);
  });

  it('update => Should update a user', async () => {
    // arrange
    const id = '1';
    const updateUserDto = {
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
      // eslint-disable-next-line prettier/prettier
    } as unknown as CreateUserDto;

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
      // eslint-disable-next-line prettier/prettier
    } as unknown as UserEntity;

    jest.spyOn(mockUserService, 'update').mockResolvedValue(user);

    // act
    const result = await controller.update(id, updateUserDto);

    // assert
    expect(result).toEqual(user);

    expect(mockUserService.update).toBeCalled();
    expect(mockUserService.update).toBeCalledWith(+id, updateUserDto);
  });

  it('remove => Should delete a user', async () => {
    // arrange
    const id = '1';
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
    } as unknown as CreateUserDto;

    jest.spyOn(mockUserService, 'remove').mockResolvedValue(user);

    // act
    const result = await controller.remove(id);

    // assert
    expect(result).toEqual(user);

    expect(mockUserService.remove).toBeCalled();
    expect(mockUserService.remove).toBeCalledWith(+id);
  });
});
