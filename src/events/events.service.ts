import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class EventsService {
  constructor(private readonly prisma: DbService) {}

  async createEvent(data: Prisma.EventCreateInput) {
    return await this.prisma.event.create({
      data,
    });
  }

  async findAllEvents() {
    return await this.prisma.event.findMany();
  }

  async findEventById(eventId: number) {
    return await this.prisma.event.findUnique({
      where: { eventId },
    });
  }

  async updateEvent(eventId: number, data: Prisma.EventUpdateInput) {
    return await this.prisma.event.update({
      where: { eventId },
      data,
    });
  }

  async deleteEvent(eventId: number) {
    return await this.prisma.event.delete({
      where: { eventId },
    });
  }
}
