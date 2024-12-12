import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    // Extract tokens
    const authHeader = request.headers['authorization'];
    const refreshToken = request.cookies?.refreshToken;

    if (!authHeader || !authHeader.startsWith('Bearer ') || !refreshToken) {
      throw new UnauthorizedException('Access or Refresh token missing');
    }

    const accessToken = authHeader.split(' ')[1];

    try {
      // Verify Access Token
      const accessPayload = this.jwtService.verify(accessToken, {
        secret: process.env.ACCESS_TOKEN_SECRET,
      });

      // Verify Refresh Token
      const refreshPayload = this.jwtService.verify(refreshToken, {
        secret: process.env.REFRESH_TOKEN_SECRET,
      });

      // Add user information to the request object (optional)
      request.user = {
        accessPayload,
        refreshPayload,
      };

      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired tokens');
    }
  }
}
