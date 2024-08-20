/* eslint-disable no-undef */
import dotenv from 'dotenv';
dotenv.config();

const config = {
  app: {
    port: process.env.PORT,
    dbUrl: process.env.DATABASE_URL,
  },
  jwtToken: {
    accessToken: process.env.ACCESS_TOKEN_KEY,
    refreshToken: process.env.REFRESH_TOKEN_KEY,
    ageToken: process.env.ACCESS_TOKEN_AGE,
  },
};

export { config };
