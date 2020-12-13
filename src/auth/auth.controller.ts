import { Controller, Get, Logger, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Response } from "express";
import { access } from "fs";
import { IUser } from "src/common/interfaces";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private authService: AuthService) {}

  @Get("google/login")
  @UseGuards(AuthGuard("google"))
  async googleLogin(@Req() req) {}

  @Get("google/callback/success")
  @UseGuards(AuthGuard("google"))
  async googleLoginCallback(@Req() req, @Res() res: Response) {
    const [accessToken, refreshToken] = this.authService.generateAuthTokens(
      req.user as IUser
    );

    await this.authService.createGoogleUser({
      name: req.user.firstName,
      email: req.user.email,
      picture: req.user.picture
    });

    res.set("aToken", accessToken);
    res.set("rToken", refreshToken);

    res.json({
      user: req.user
    });
  }
}
