import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtConstants } from 'src/config';
import { UserService } from '../user/user.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async register(userdata: Prisma.UserCreateInput) {
    const user: User = await this.userService.registerUser(userdata);
    const accessToken: string = await this.generateAccessToken(user.userId);
    const refreshToken: string = await this.generateRefreshToken(user.userId);
    return { user, accessToken, refreshToken };
  }

  async login(identifier: string, password: string) {
    let user: User = await this.userService.retrieveUserByEmail(identifier);
    if (!user) {
      user = await this.userService.retrieveUserByUsername(identifier);
      if (!user) {
        throw new NotFoundException('there is no user with this identifier');
      }
    }
    const auth: boolean = await this.userService.comparePassword(
      user,
      password,
    );
    if (!auth) {
      throw new UnauthorizedException('wrong password');
    }
    const accessToken: string = await this.generateAccessToken(user.userId);
    const refreshToken: string = await this.generateRefreshToken(user.userId);
    return { user, accessToken, refreshToken };
  }

  async generateAccessToken(userId: number): Promise<string> {
    return this.jwtService.sign(
      { userId },
      {
        secret: JwtConstants.accessTokenSecret,
        expiresIn: '10m',
      },
    );
  }

  // Generate Refresh Token
  async generateRefreshToken(userId: number): Promise<string> {
    return this.jwtService.sign(
      { userId },
      {
        secret: JwtConstants.refreshTokenSecret,
        expiresIn: '7d',
      },
    );
  }
}
