import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { EventsModule } from './events/events.module';
import { PartnersModule } from './partners/partners.module';

@Module({
  imports: [DbModule, EventsModule, PartnersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
