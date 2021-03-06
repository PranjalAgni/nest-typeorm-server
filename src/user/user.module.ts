import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { userProviders } from "./user.provider";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";

@Module({
  imports: [DatabaseModule],
  providers: [...userProviders, UserService],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule {}
