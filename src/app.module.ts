import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [DbModule, EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
