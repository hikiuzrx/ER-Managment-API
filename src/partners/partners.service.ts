import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PartnersService {
  constructor(private readonly prisma: DbService) {}

  async createPartner(data: Prisma.PartnerCreateInput) {
    return await this.prisma.partner.create({
      data,
    });
  }

  async getAllPartners() {
    return await this.prisma.partner.findMany();
  }

  async getPartnerById(partnerId: number) {
    return await this.prisma.partner.findUnique({
      where: { partnerId },
    });
  }

  async updatePartner(partnerId: number, data: Prisma.PartnerUpdateInput) {
    return await this.prisma.partner.update({
      where: { partnerId },
      data,
    });
  }

  async deletePartner(partnerId: number) {
    return await this.prisma.partner.delete({
      where: { partnerId },
    });
  }
}
