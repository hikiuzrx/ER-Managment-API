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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Partners')
@Controller('partners')
export class PartnersController {
  constructor(private readonly partnersService: PartnersService) {}

  @Post()
  @ApiOperation({ summary: 'Add a new partner' })
  @ApiResponse({ status: 200, description: 'partner added successfully' })
  async addPartner(@Body() createPartnerDto: Prisma.PartnerCreateInput) {
    return this.partnersService.createPartner(createPartnerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all partners' })
  @ApiResponse({ status: 200, description: 'Return all partners' })
  async getPartners() {
    return this.partnersService.getAllPartners();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a partner by a provided ID' })
  @ApiResponse({ status: 200, description: 'Return partner by ID' })
  async getOne(@Param('id') id: string) {
    return this.partnersService.getPartnerById(Number(id));
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a partner by a provided ID' })
  @ApiResponse({ status: 200, description: 'partner updated successfully' })
  async updateOne(
    @Param('id') id: string,
    @Body() replacePartnerDto: Prisma.PartnerUpdateInput,
  ) {
    return this.partnersService.updatePartner(Number(id), replacePartnerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a partner by a provided ID' })
  @ApiResponse({ status: 200, description: 'partner deleted successfully' })
  async remove(@Param('id') id: string) {
    return this.partnersService.deletePartner(Number(id));
  }
}
