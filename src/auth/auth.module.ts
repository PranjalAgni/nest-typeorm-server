import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { GoogleStrategy } from "src/passport/strategies/Google";
import { userProviders } from "src/user/user.provider";
import { UserService } from "src/user/user.service";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
  imports: [DatabaseModule],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy, ...userProviders, UserService]
})
export class AuthModule {}
