import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DbService } from '../db/db.service';
import { Prisma } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class EventsService {
  constructor(private readonly prisma: DbService) {}

  async createEvent(data: Prisma.EventCreateInput) {
    const event1 = await this.prisma.event.findUnique({
      where: { name: data.name },
    });

    const event2 = await this.prisma.event.findUnique({
      where: { date: data.date },
    });

    if (event1 || event2) {
      throw new ConflictException('event already exists');
    }

    return this.prisma.event.create({
      data,
    });
  }

  async getAllEvents() {
    return this.prisma.event.findMany();
  }

  async getEventById(eventId: number) {
    //check that the provided event ID is a number
    if (isNaN(eventId)) {
      throw new BadRequestException('Invalid eventId');
    }

    const event = await this.prisma.event.findUnique({
      where: { eventId },
    });

    //check if the wanted event was found
    if (!event) {
      throw new NotFoundException(`event with ID ${eventId} not found.`);
    }

    return event;
  }

  async updateEvent(eventId: number, data: Prisma.EventUpdateInput) {
    //check that the provided event ID is a number
    if (isNaN(eventId)) {
      throw new BadRequestException('Invalid eventId');
    }

    try {
      const updatedEvent = await this.prisma.event.update({
        where: { eventId },
        data,
      });

      //check if the wanted event was found
      if (!updatedEvent) {
        throw new NotFoundException(`event with ID ${eventId} not found.`);
      }

      return updatedEvent;
    } catch (error) {
      //throw error if it occurs
      if (error instanceof PrismaClientKnownRequestError) {
        throw new BadRequestException(
          'Unable to update event due to foreign key constraints.',
        );
      }

      throw error;
    }
  }

  async deleteEvent(eventId: number) {
    //check that the provided event ID is a number
    if (isNaN(eventId)) {
      throw new BadRequestException('Invalid eventId');
    }

    try {
      const deletedEvent = await this.prisma.event.delete({
        where: { eventId },
      });

      //check if the wanted event was found
      if (!deletedEvent) {
        throw new NotFoundException(`event with ID ${eventId} not found.`);
      }

      return deletedEvent;
    } catch (error) {
      //throw error if it occurs
      if (error instanceof PrismaClientKnownRequestError) {
        throw new BadRequestException(
          'Unable to delete event due to foreign key constraints.',
        );
      }

      throw error;
    }
  }
}
