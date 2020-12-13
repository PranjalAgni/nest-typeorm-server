import { config } from "dotenv";

config();

export default {
  PORT: 5050,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME
  },
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  },
  jwt: {
    algorithm: "RS256",
    accessToken: {
      expiresIN: "1m"
    },
    refreshToken: {
      expiresIN: "7d"
    }
  }
};
