import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';

@Module({
  imports: [],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
