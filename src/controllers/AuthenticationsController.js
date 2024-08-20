import autoBind from 'auto-bind';
import authenticationsService from '../services/postgres/AuthenticationsService.js';
import usersService from '../services/postgres/UsersService.js';
import tokenManager from '../utils/tokenManager.js';

class AuthenticationsController {
  constructor() {
    autoBind(this);
  }

  async postAuthentication(req, res, next) {
    try {
      const { email, password } = req.body;
      const result = await usersService.verifyUserCredential({
        email,
        password,
      });

      const accessToken = tokenManager.generateAccessToken({
        id: result.id,
        email: result.email,
        username: result.username,
        role: result.role,
      });

      const refreshToken = tokenManager.generateRefreshToken({
        id: result.id,
        username: result.username,
        email: result.email,
        role: result.role,
      });

      await authenticationsService.addRefreshToken({ refreshToken });

      res.status(201).json({
        status: 'created',
        message: 'authentication has been created succefully',
        data: {
          accessToken: accessToken,
          refreshToken: refreshToken,
          user: {
            id: result.id,
            username: result.username,
            email: result.email,
            role: result.role,
          },
        },
      });
    } catch (e) {
      next(e);
    }
  }

  async putAuthentication(req, res, next) {
    try {
      const { refreshToken } = req.body;
      await authenticationsService.verifyRefreshToken({ refreshToken });

      const accessToken = tokenManager.generateAccessToken({
        id: req.userId,
        username: req.username,
        email: req.email,
        role: req.role,
      });

      res.status(200).json({
        status: 'success',
        message: 'authentication has been updated succefully',
        data: {
          accessToken: accessToken,
        },
      });
    } catch (e) {
      next(e);
    }
  }

  async deleteAuthentication(req, res, next) {
    try {
      const { refreshToken } = req.body;
      await authenticationsService.verifyRefreshToken({ refreshToken });
      await authenticationsService.deleteRefreshToken({ refreshToken });

      res.status(200).json({
        status: 'success',
        message: 'authentication has been deleted succefully',
      });
    } catch (e) {
      next(e);
    }
  }
}

export default new AuthenticationsController();
