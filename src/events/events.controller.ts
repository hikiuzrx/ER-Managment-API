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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Events')
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  @ApiOperation({ summary: 'Add a new event' })
  @ApiResponse({ status: 200, description: 'event added successfully' })
  async addEvent(@Body() createEventDto: Prisma.EventCreateInput) {
    return this.eventsService.createEvent(createEventDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all events' })
  @ApiResponse({ status: 200, description: 'Return all events' })
  async getEvents() {
    return this.eventsService.getAllEvents();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an event by a provided ID' })
  @ApiResponse({ status: 200, description: 'Return event by ID' })
  async getOne(@Param('id') id: string) {
    return this.eventsService.getEventById(Number(id));
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an event by a provided ID' })
  @ApiResponse({ status: 200, description: 'event updated successfully' })
  async updateOne(
    @Param('id') id: string,
    @Body() replaceEventDto: Prisma.EventUpdateInput,
  ) {
    return this.eventsService.updateEvent(Number(id), replaceEventDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an event by a provided ID' })
  @ApiResponse({ status: 200, description: 'event deleted successfully' })
  async remove(@Param('id') id: string) {
    return this.eventsService.deleteEvent(Number(id));
  }
}
