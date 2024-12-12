import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { PartnersService } from './partners.service';
import { Prisma } from '@prisma/client';

@Controller('partners')
export class PartnersController {
  constructor(private readonly partnersService: PartnersService) {}

  @Post()
  async addPartner(@Body() createPartnerDto: Prisma.PartnerCreateInput) {
    return this.partnersService.createPartner(createPartnerDto);
  }

  @Get()
  async getPartners() {
    return this.partnersService.getAllPartners();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.partnersService.getPartnerById(Number(id));
  }

  @Put(':id')
  async updateOne(
    @Param('id') id: string,
    @Body() replacePartnerDto: Prisma.PartnerUpdateInput,
  ) {
    return this.partnersService.updatePartner(Number(id), replacePartnerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.partnersService.deletePartner(Number(id));
  }
}
