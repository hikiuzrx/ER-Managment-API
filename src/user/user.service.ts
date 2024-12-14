import { ConflictException, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { DbService } from 'src/db/db.service';
import * as bcrypt from 'bcrypt';
type updateData = [string, string];
@Injectable()
export class UserService {
  constructor(private readonly dbService: DbService) {}

  async registerUser(userdata: Prisma.UserCreateInput): Promise<User> {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userdata.password, salt);

    const existingEmail = await this.dbService.user.findUnique({
      where: {
        email: userdata.email,
      },
    });

    if (existingEmail) {
      throw new ConflictException('email already in use');
    } else {
      const existingUsername = await this.dbService.user.findUnique({
        where: {
          username: userdata.username,
        },
      });

      if (existingUsername) {
        throw new ConflictException('username already in use');
      } else {
        const existingFullName = await this.dbService.user.findUnique({
          where: {
            fullName: userdata.fullName,
          },
        });

        if (existingFullName) {
          throw new ConflictException(
            `A user with the name ${userdata.fullName} already exist`,
          );
        }
      }
    }

    return this.dbService.user.create({
      data: {
        username: userdata.username,
        email: userdata.email,
        fullName: userdata.fullName,
        password: hashedPassword,
      },
    });
  }

  retrieveUserById(userId: number): Promise<User> {
    return this.dbService.user.findFirst({
      where: {
        userId,
      },
    });
  }

  retrieveUserByEmail(email: string): Promise<User> {
    return this.dbService.user.findFirst({
      where: {
        email,
      },
    });
  }

  retrieveUserByUsername(username: string): Promise<User> {
    return this.dbService.user.findFirst({
      where: {
        username,
      },
    });
  }

  async UpdateUser(id: number, updateData: updateData): Promise<User> {
    let user: User;

    switch (updateData[0]) {
      case 'fullName':
        user = await this.dbService.user.findFirst({
          where: {
            fullName: updateData[1],
          },
        });
        if (user) {
          throw new ConflictException('this name is already in use');
        } else {
          return this.dbService.user.update({
            where: {
              userId: id,
            },
            data: {
              fullName: updateData[1],
            },
          });
        }
        break;

      case 'email':
        user = await this.dbService.user.findFirst({
          where: {
            email: updateData[1],
          },
        });
        if (user) {
          throw new ConflictException('email already in use');
        } else {
          return this.dbService.user.update({
            where: {
              userId: id,
            },
            data: {
              email: updateData[1],
            },
          });
        }

        break;

      case 'password':
        const salt: string = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(updateData[1], salt);
        return this.dbService.user.update({
          where: {
            userId: id,
          },
          data: {
            password: hashedPassword,
          },
        });
        break;

      case 'username':
        user = await this.dbService.user.findFirst({
          where: {
            username: updateData[1],
          },
        });
        if (user) {
          throw new ConflictException('username already in use');
        } else {
          return this.dbService.user.update({
            where: {
              userId: id,
            },
            data: {
              username: updateData[1],
            },
          });
        }
    }
  }

  async comparePassword(user: User, password: string): Promise<boolean> {
    return bcrypt.compare(password, user.password);
  }

  async deleteUser(id: number): Promise<User> {
    return await this.dbService.user.delete({
      where: {
        userId: id,
      },
    });
  }
}
