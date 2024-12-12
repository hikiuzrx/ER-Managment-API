import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DbService } from '../db/db.service';
import { Prisma } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class PartnersService {
  constructor(private readonly prisma: DbService) {}

  async createPartner(data: Prisma.PartnerCreateInput) {
    return this.prisma.partner.create({
      data,
    });
  }

  async getAllPartners() {
    return this.prisma.partner.findMany();
  }

  async getPartnerById(partnerId: number) {
    //check that the provided partner ID is a number
    if (isNaN(partnerId)) {
      throw new BadRequestException('Invalid partnerId');
    }

    const partner = await this.prisma.partner.findUnique({
      where: { partnerId },
    });

    //check if the wanted partner was found
    if (!partner) {
      throw new NotFoundException(`Partner with ID ${partnerId} not found.`);
    }

    return partner;
  }

  async updatePartner(partnerId: number, data: Prisma.PartnerUpdateInput) {
    //check that the provided partner ID is a number
    if (isNaN(partnerId)) {
      throw new BadRequestException('Invalid partnerId');
    }

    try {
      const updatedPartner = await this.prisma.partner.update({
        where: { partnerId },
        data,
      });

      //check if the wanted partner was found
      if (!updatedPartner) {
        throw new NotFoundException(`Partner with ID ${partnerId} not found.`);
      }

      return updatedPartner;
    } catch (error) {
      //throw error if it occurs
      if (error instanceof PrismaClientKnownRequestError) {
        throw new BadRequestException(
          'Unable to update partner due to foreign key constraints.',
        );
      }

      throw error;
    }
  }

  async deletePartner(partnerId: number) {
    //check that the provided partner ID is a number
    if (isNaN(partnerId)) {
      throw new BadRequestException('Invalid partnerId');
    }

    try {
      const deletedPartner = await this.prisma.partner.delete({
        where: { partnerId },
      });

      //check if the wanted partner was found
      if (!deletedPartner) {
        throw new NotFoundException(`Partner with ID ${partnerId} not found.`);
      }

      return deletedPartner;
    } catch (error) {
      //throw error if it occurs
      if (error instanceof PrismaClientKnownRequestError) {
        throw new BadRequestException(
          'Unable to delete partner due to foreign key constraints.',
        );
      }

      throw error;
    }
  }
}
