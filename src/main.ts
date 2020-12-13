import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import * as compression from "compression";
import * as cors from "cors";
import * as helmet from "helmet";
import config from "src/config";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(compression());
  app.use(helmet());
  app.use(cors());
  app.setGlobalPrefix("api");

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(config.PORT);
}

bootstrap();
