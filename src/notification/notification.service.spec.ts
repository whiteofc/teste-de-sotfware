import { Test, TestingModule } from '@nestjs/testing';
import { NotificationService } from './notification.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { NotificationEntity } from './entities/notification.entity';

describe('NotificationService', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const mockUserRepository = {
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    delete: jest.fn(),
    update: jest.fn(),
  };

  let service: NotificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NotificationService,
        {
          provide: getRepositoryToken(NotificationEntity),
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    service = module.get<NotificationService>(NotificationService);
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
    const CreateNotificationDto = {
      message: 'Hello World',
      notification: 'boa noite',
      date_time: Date.now(),
      Recipient: 'Chadwick Boseman',
      user_id: 1,
      // eslint-disable-next-line prettier/prettier
    } as unknown as CreateNotificationDto;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const notification = {
      id: Number,
      message: 'Hello World',
      notification: 'boa noite',
      date_time: Date.now(),
      Recipient: 'Chadwick Boseman',
      user_id: 1,
    } as unknown as NotificationEntity;

    jest.spyOn(mockUserRepository, 'save').mockReturnValue(notification);

    // act
    const result = await service.create(CreateNotificationDto);

    // assert
    expect(mockUserRepository.save).toBeCalled();
    expect(mockUserRepository.save).toBeCalledWith(CreateNotificationDto);

    expect(result).toEqual(
      expect.objectContaining({
        notification,
      }),
    );
  });

  it('findAll => Should return all users', async () => {
    // arrange
    const notification = {
      id: Number,
      message: 'Hello World',
      notification: 'boa noite',
      date_time: Date.now(),
      Recipient: 'Chadwick Boseman',
      user_id: 1,
    } as unknown as NotificationEntity;

    const notifications = [notification, notification];

    jest.spyOn(mockUserRepository, 'find').mockReturnValue(notifications);

    // act
    const result = await service.findAll();

    // assert
    expect(mockUserRepository.find).toBeCalled();
    expect(mockUserRepository.find).toBeCalledWith();

    expect(result).toEqual(
      expect.objectContaining({
        notifications,
      }),
    );
  });

  it('findOne => Should return a user by id', async () => {
    // arrange
    const notification = {
      id: Number,
      message: 'Hello World',
      notification: 'boa noite',
      date_time: Date.now(),
      Recipient: 'Chadwick Boseman',
      user_id: 1,
    } as unknown as NotificationEntity;

    jest.spyOn(mockUserRepository, 'findOne').mockReturnValue(notification);

    // act
    const result = await service.findOne(1);

    // assert
    expect(mockUserRepository.findOne).toBeCalled();
    expect(mockUserRepository.findOne).toBeCalledWith({ where: { id: 1 } });

    expect(result).toEqual(
      expect.objectContaining({
        notification,
      }),
    );
  });

  it('update => Should update a user by id', async () => {
    // arrange
    const notification = {
      id: Number,
      message: 'Hello World',
      notification: 'boa noite',
      date_time: Date.now(),
      Recipient: 'Chadwick Boseman',
      user_id: 1,
    } as unknown as NotificationEntity;

    jest.spyOn(mockUserRepository, 'update').mockReturnValue(notification);

    // act
    const result = await service.update(1, notification);

    // assert
    expect(mockUserRepository.update).toBeCalled();
    expect(mockUserRepository.update).toBeCalledWith(1, notification);

    expect(result).toEqual(
      expect.objectContaining({
        notification,
      }),
    );
  });

  it('remove => Should delete a user by id', async () => {
    // arrange
    const notification = {
      id: Number,
      message: 'Hello World',
      notification: 'boa noite',
      date_time: Date.now(),
      Recipient: 'Chadwick Boseman',
      user_id: 1,
    } as unknown as NotificationEntity;

    jest.spyOn(mockUserRepository, 'delete').mockReturnValue(notification);

    // act
    const result = await service.remove(1);

    // assert
    expect(mockUserRepository.delete).toBeCalled();
    expect(mockUserRepository.delete).toBeCalledWith(
      expect.objectContaining({ id: 1 }),
    );

    expect(result).toEqual(
      expect.objectContaining({
        notification,
      }),
    );
  });
});
