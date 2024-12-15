import { Controller, Post, Body, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { Prisma, User } from '@prisma/client';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from './auth.guard';
type AuthResult = User & {
  accessToken: string;
};

@ApiTags('Auth')
@Controller('auth')
@UseGuards(AuthGuard)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'The login logic' })
  @ApiResponse({ status: 200, description: 'user logged in successfully' })
  async login(
    @Res() res: Response,
    @Body() body: { identifier: string; password: string },
  ) {
    const { identifier, password } = body;
    const authenticationData = await this.authService.login(
      identifier,
      password,
    );

    res.cookie('refreshToken', authenticationData.refreshToken, {
      httpOnly: true, // Prevent client-side JavaScript access
      secure: true, // Use HTTPS (set to `false` for local dev)
      sameSite: 'strict', // Prevent CSRF attacks
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    const results: AuthResult = {
      ...authenticationData.user,
      accessToken: authenticationData.accessToken,
    };
    return results;
  }

  @Post('sign-up')
  @ApiOperation({ summary: 'The sign-up logic' })
  @ApiResponse({ status: 200, description: 'user signed up successfully' })
  async Register(
    @Res() res: Response,
    @Body() userData: Prisma.UserCreateInput,
  ) {
    const authenticationData = await this.authService.register(userData);
    res.cookie('refreshToken', authenticationData.refreshToken, {
      httpOnly: true, // Prevent client-side JavaScript access
      secure: true, // Use HTTPS (set to `false` for local dev)
      sameSite: 'strict', // Prevent CSRF attacks
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    const results: AuthResult = {
      ...authenticationData.user,
      accessToken: authenticationData.accessToken,
    };
    return results;
  }
}
