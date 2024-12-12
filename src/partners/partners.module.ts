import { Module } from '@nestjs/common';
import { PartnersController } from './partners.controller';
import { PartnersService } from './partners.service';

@Module({
  imports: [],
  controllers: [PartnersController],
  providers: [PartnersService],
})
export class PartnersModule {}
