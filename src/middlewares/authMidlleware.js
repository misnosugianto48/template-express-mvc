import { AuthenticationError } from '../exceptions/AuthenticationError.js';
import { AuthorizationError } from '../exceptions/AuthorizationError.js';
import Jwt from 'jsonwebtoken';
import { config } from '../utils/config.js';
import { InvariantError } from '../exceptions/InvariantError.js';

const authMiddleware =
  (requiredRole = 'USER') =>
  (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      console.log('No authorization header');
      return next(new AuthenticationError('unauthorized'));
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
      console.log('No token');
      return next(new AuthenticationError('unauthorized'));
    }

    try {
      const data = Jwt.verify(token, config.jwtToken.accessToken);

      console.log('Token data:', data);

      req.userId = data.id;
      req.role = data.role;

      if (requiredRole !== 'USER' && data.role !== requiredRole) {
        console.log(
          `User role ${data.role} does not match required role ${requiredRole}`
        );
        return next(new AuthorizationError(`requires ${requiredRole} role`));
      }

      return next();
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        console.log('Token expired');
        return next(new AuthenticationError('token expired'));
      }
      console.log('Authorization error:', error);
      next(new AuthorizationError('not enough access'));
    }
  };

const verifyRefreshToken = (req, res, next) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return next(new InvariantError('invalid token'));
  }

  try {
    const decodedToken = Jwt.decode(refreshToken);
    Jwt.verify(refreshToken, config.jwtToken.refreshToken);

    req.userId = decodedToken.id;
    req.username = decodedToken.username;
    req.email = decodedToken.email;
    req.role = decodedToken.role;
    return next();
  } catch (error) {
    if (error) {
      return next(new InvariantError('invalid token'));
    }
  }
};

export { authMiddleware, verifyRefreshToken };
