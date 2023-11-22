import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { NotificationEntity } from './entities/notification.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(NotificationEntity)
    private readonly notificationRepository: Repository<NotificationEntity>,
  ) {}

  async create(createNotificationDto: CreateNotificationDto) {
    try {
      const notification = await this.notificationRepository.save(
        createNotificationDto,
      );

      return { notification, message: 'Notification created successfully' };
    } catch (error) {
      throw new HttpException(
        { message: 'Error creating notification' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll() {
    try {
      const notifications = await this.notificationRepository.find();

      return { notifications, message: 'Notifications found successfully' };
    } catch (error) {
      throw new HttpException(
        { message: 'Error finding notifications' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findOne(id: number) {
    try {
      const notification = await this.notificationRepository.findOne({
        where: { id },
      });

      return { notification, message: 'Notification found successfully' };
    } catch (error) {
      throw new HttpException(
        { message: 'Error finding notification' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async update(id: number, updateNotificationDto: UpdateNotificationDto) {
    try {
      const notification = await this.notificationRepository.update(
        id,
        updateNotificationDto,
      );

      return { notification, message: 'Notification updated successfully' };
    } catch (error) {
      throw new HttpException(
        { message: 'Error updating notification' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async remove(id: number) {
    try {
      const notification = await this.notificationRepository.delete({ id });

      return { notification, message: 'Notification deleted successfully' };
    } catch (error) {
      throw new HttpException(
        { message: 'Error deleting notification' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
