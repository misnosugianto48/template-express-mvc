import Jwt from 'jsonwebtoken';
import { config } from './config.js';

const generateAccessToken = (payload) => {
  return Jwt.sign(payload, config.jwtToken.accessToken, {
    expiresIn: config.jwtToken.ageToken,
  });
};

const generateRefreshToken = (payload) => {
  return Jwt.sign(payload, config.jwtToken.refreshToken);
};

export default { generateAccessToken, generateRefreshToken };
