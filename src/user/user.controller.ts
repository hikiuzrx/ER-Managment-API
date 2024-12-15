import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get a user by a provided ID' })
  @ApiResponse({ status: 200, description: 'Return user by ID' })
  async getUser(@Param('id', ParseIntPipe) id: number) {
    const user: User = await this.userService.retrieveUserById(id);
    if (!user) {
      throw new NotFoundException('there is no user with this user id');
    }
    return user;
  }

  @Patch('id')
  @ApiOperation({
    summary: "Modify a given user's data (identifiable by his ID)",
  })
  @ApiResponse({ status: 200, description: 'User successfully updated.' })
  ModifyUserData(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: [string, string],
  ): Promise<User> {
    return this.userService.UpdateUser(id, updateData);
  }

  @Delete('id')
  @ApiOperation({ summary: 'Delete a user (identifiable by his ID)' })
  @ApiResponse({ status: 200, description: 'User successfully deleted.' })
  async deleteUser(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ message: string; id: number }> {
    await this.userService.deleteUser(id);
    return { message: 'user deleted successfully', id };
  }
}
