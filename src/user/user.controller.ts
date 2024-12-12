import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import {  User } from '@prisma/client';


@Controller('user')
export class UserController {
     constructor(private readonly userSrevice:UserService ){}
     @Get(':id')
     async getUser(@Param('id',ParseIntPipe) id:number) {
          const user:User = await this.userSrevice.retriveUserById(id)
          if(!user){
               throw new NotFoundException('there is no user with this user id')
          }
          return user
     }
     @Patch('id')
     ModifyUserData(
          @Param('id',ParseIntPipe) id:number,
          @Body() updateData : [string,string]
      ):Promise<User>{
          return  this.userSrevice.UpdateUser(id, updateData)
     }
     @Delete('id')
     async deleteUser(@Param('id',ParseIntPipe) id:number):Promise<{message:string,id:number}> {
         await this.userSrevice.deleteUser(id)
         return {message:'user deleted successfuly',id}
     }
     
}
