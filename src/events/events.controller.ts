import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { Prisma } from '@prisma/client';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  async addEvent(@Body() createEventDto: Prisma.EventCreateInput) {
    return this.eventsService.createEvent(createEventDto);
  }

  @Get()
  async getEvents() {
    return this.eventsService.getAllEvents();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.eventsService.getEventById(Number(id));
  }

  @Put(':id')
  async updateOne(
    @Param('id') id: string,
    @Body() replaceEventDto: Prisma.EventUpdateInput,
  ) {
    return this.eventsService.updateEvent(Number(id), replaceEventDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.eventsService.deleteEvent(Number(id));
  }
}
