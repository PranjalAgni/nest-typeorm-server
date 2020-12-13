import { join } from "path";
import { ConnectionOptions } from "typeorm";

const connectOptions: ConnectionOptions = {
  type: "mysql",
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [join(__dirname, "**", "*.entity.{ts,js}")],
  migrations: [join(__dirname, "src/database/migrations/*.ts")],
  migrationsTableName: "migration_table",
  synchronize: false,
  logging: true,
  cli: {
    migrationsDir: "src/database/migrations"
  }
};

export default connectOptions;
