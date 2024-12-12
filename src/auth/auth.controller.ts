import { Controller, Post, Body,Res } from '@nestjs/common';
import { Response } from 'express'; 
import { AuthService } from './auth.service';
import { Prisma, User } from '@prisma/client';
type AuthResult = User &{
     accessToken:string
}
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Res() res:Response,@Body() body: { identifier: string; password: string }) {
     const {identifier,password} = body
     let authenticationData =await this.authService.login(identifier,password)
     
     res.cookie('refreshToken', authenticationData.refreshToken, {
          httpOnly: true, // Prevent client-side JavaScript access
          secure: true, // Use HTTPS (set to `false` for local dev)
          sameSite: 'strict', // Prevent CSRF attacks
          maxAge: 7 * 24 * 60 * 60 * 1000, 
          
        });
        const results :AuthResult = {
          ...authenticationData.user,
          accessToken:authenticationData.accessToken
        }
        return results
  }
  @Post('sign-up')
  async Register(@Res() res:Response,@Body() userData:Prisma.UserCreateInput){
     let authenticationData = await this.authService.register(userData)
     res.cookie('refreshToken', authenticationData.refreshToken, {
          httpOnly: true, // Prevent client-side JavaScript access
          secure: true, // Use HTTPS (set to `false` for local dev)
          sameSite: 'strict', // Prevent CSRF attacks
          maxAge: 7 * 24 * 60 * 60 * 1000, 
          
        });
        const results :AuthResult = {
          ...authenticationData.user,
          accessToken:authenticationData.accessToken
        }
        return results
  }
  
}
