import { prismaClient } from '../../apps/database.js';
import { NotFoundError } from '../../exceptions/NotFoundError.js';
import authenticationsValidator from '../../validators/authenticationsValidator.js';
import { validate } from '../../validators/validate.js';

class AuthenticationsService {
  async addRefreshToken({ refreshToken }) {
    return await prismaClient.authentication.create({
      data: {
        token: refreshToken,
      },
    });
  }

  async verifyRefreshToken({ refreshToken }) {
    const validator = validate(
      authenticationsValidator.editAuthenticationValidator,
      { refreshToken }
    );

    const token = await prismaClient.authentication.findUnique({
      where: {
        token: validator.refreshToken,
      },
      select: {
        token: true,
      },
    });

    if (!token) {
      throw new NotFoundError('token not found');
    }

    return token;
  }

  async deleteRefreshToken({ refreshToken }) {
    const validator = validate(
      authenticationsValidator.deleteAuthenticationValidator,
      { refreshToken }
    );
    const token = await prismaClient.authentication.delete({
      where: {
        token: validator.refreshToken,
      },
    });

    if (!token) {
      throw new NotFoundError('token not found');
    }

    return token;
  }
}

export default new AuthenticationsService();
