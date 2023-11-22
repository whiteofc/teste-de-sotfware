import { Test, TestingModule } from '@nestjs/testing';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { NotificationEntity } from './entities/notification.entity';

describe('NotificationController', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const mockNotificationService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  let controller: NotificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificationController],
      providers: [
        {
          provide: NotificationService,
          useValue: mockNotificationService,
        },
      ],
    }).compile();

    controller = module.get<NotificationController>(NotificationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('create => should create a new user by a given data', async () => {
    // arrange
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const createNotificationDto = {
      message: 'Hello World',
      notification: 'boa noite',
      date_time: '22/12/1990',
      Recipient: 'Chadwick Boseman',
      user_id: 1,
      // eslint-disable-next-line prettier/prettier
    } as unknown as CreateNotificationDto;

    const notification = {
      id: Number,
      message: 'Hello World',
      notification: 'boa noite',
      date_time: '22/12/1990',
      Recipient: 'Chadwick Boseman',
      user_id: 1,
      // eslint-disable-next-line prettier/prettier
    } as unknown as NotificationEntity;

    jest.spyOn(mockNotificationService, 'create').mockReturnValue(notification);

    // act
    const result = await controller.create(createNotificationDto);

    // assert
    expect(mockNotificationService.create).toBeCalled();
    expect(mockNotificationService.create).toBeCalledWith(
      createNotificationDto,
    );

    expect(result).toEqual(notification);
  });

  it('create => Should create a new user and return its data', async () => {
    // arrange
    const createNotificationDto = {
      message: 'Hello World',
      notification: 'boa noite',
      date_time: '22/12/1990',
      Recipient: 'Chadwick Boseman',
      user_id: 1,
      // eslint-disable-next-line prettier/prettier
    } as unknown as CreateNotificationDto;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const notification = {
      id: Number,
      message: 'Hello World',
      notification: 'boa noite',
      date_time: '22/12/1990',
      Recipient: 'Chadwick Boseman',
      user_id: 1,
      // eslint-disable-next-line prettier/prettier
    } as unknown as NotificationEntity;

    // act
    const result = await controller.create(createNotificationDto);

    // assert
    expect(mockNotificationService.create).toBeCalled();
    expect(mockNotificationService.create).toBeCalledWith(
      createNotificationDto,
    );

    expect(result).toEqual(notification);
  });

  it('findAll => should return an array of user', async () => {
    //arrange
    const notification = {
      id: Number,
      message: 'Hello World',
      notification: 'boa noite',
      date_time: '22/12/1990',
      Recipient: 'Chadwick Boseman',
      user_id: 1,
      // eslint-disable-next-line prettier/prettier
    };
    const notifications = [notification];
    jest
      .spyOn(mockNotificationService, 'findAll')
      .mockReturnValue(notifications);

    //act
    const result = await controller.findAll();

    // assert
    expect(result).toEqual(notifications);
    expect(mockNotificationService.findAll).toBeCalled();
  });

  it('findOne => should find a user by a given id and return its data', async () => {
    //arrange
    const id = '1';
    const notification = {
      id: 1,
      message: 'Hello World',
      notification: 'boa noite',
      date_time: '22/12/1990',
      Recipient: 'Chadwick Boseman',
      user_id: 1,
    };

    jest
      .spyOn(mockNotificationService, 'findOne')
      .mockReturnValue(notification);

    //act
    const result = await controller.findOne(id);

    expect(result).toEqual(notification);
    expect(mockNotificationService.findOne).toBeCalled();
    expect(mockNotificationService.findOne).toBeCalledWith(+id);
  });

  it('update => Should update a user', async () => {
    // arrange
    const id = '1';
    const updateNotificationDto = {
      message: 'Hello World',
      notification: 'boa noite',
      date_time: '22/12/1990',
      Recipient: 'Chadwick Boseman',
      user_id: 1,
      // eslint-disable-next-line prettier/prettier
    } as unknown as CreateNotificationDto;

    const notification = {
      id: Number,
      message: 'Hello World',
      notification: 'boa noite',
      date_time: '22/12/1990',
      Recipient: 'Chadwick Boseman',
      user_id: 1,
      // eslint-disable-next-line prettier/prettier
    } as unknown as CreateNotificationDto;

    jest
      .spyOn(mockNotificationService, 'update')
      .mockResolvedValue(notification);

    // act
    const result = await controller.update(id, updateNotificationDto);

    // assert
    expect(result).toEqual(notification);

    expect(mockNotificationService.update).toBeCalled();
    expect(mockNotificationService.update).toBeCalledWith(
      +id,
      updateNotificationDto,
    );
  });

  it('remove => Should delete a user', async () => {
    // arrange
    const id = '1';
    const notification = {
      id: Number,
      message: 'Hello World',
      notification: 'boa noite',
      date_time: '22/12/1990',
      Recipient: 'Chadwick Boseman',
      user_id: 1,
      // eslint-disable-next-line prettier/prettier
    } as unknown as CreateNotificationDto;

    jest
      .spyOn(mockNotificationService, 'remove')
      .mockResolvedValue(notification);

    // act
    const result = await controller.remove(id);

    // assert
    expect(result).toEqual(notification);

    expect(mockNotificationService.remove).toBeCalled();
    expect(mockNotificationService.remove).toBeCalledWith(+id);
  });
});
