import { Injectable } from "@nestjs/common";
import { IUser } from "src/common/interfaces";
import {
  generateAccessToken,
  generateRefreshToken
} from "src/common/utils/jwt";
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  getGoogleUser(req) {
    if (!req.user) return "No user from Google";

    return {
      message: "User info",
      user: req.user
    };
  }

  generateAuthTokens(user: IUser): Array<string> {
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    return [accessToken, refreshToken];
  }

  async createGoogleUser(user: CreateUserDto): Promise<void> {
    await this.userService.create(user);
  }
}
