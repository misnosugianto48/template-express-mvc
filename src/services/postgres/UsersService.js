import usersValidator from '../../validators/usersValidator.js';
import { validate } from '../../validators/validate.js';
import { prismaClient } from '../../apps/database.js';
import bcrypt from 'bcrypt';
import { InvariantError } from '../../exceptions/InvariantError.js';
import { AuthenticationError } from '../../exceptions/AuthenticationError.js';
import { nanoid } from 'nanoid';
import authenticationsValidator from '../../validators/authenticationsValidator.js';

class UsersService {
  async createUser({ username, email, password, role }) {
    const user = validate(usersValidator.createUserValidator, {
      username,
      email,
      password,
    });

    const isUsernameExist = await prismaClient.user.findUnique({
      where: {
        username: user.username,
      },
    });

    if (isUsernameExist) {
      throw new InvariantError('username already exists');
    }

    const isEmailExist = await prismaClient.user.findUnique({
      where: {
        email: user.email,
      },
    });

    if (isEmailExist) {
      throw new InvariantError('email already exists');
    }

    const hashPassword = bcrypt.hashSync(password, 10);

    const newUser = {
      id: `user-${nanoid(10)}`,
      username: username,
      email: email,
      password: hashPassword,
      role: role,
    };

    return prismaClient.user.create({
      data: newUser,
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
      },
    });
  }

  async verifyUserCredential({ email, password }) {
    const user = validate(authenticationsValidator.addAuthenticationValidator, {
      email,
      password,
    });

    const validUser = await prismaClient.user.findUnique({
      where: {
        email: user.email,
      },
      select: {
        id: true,
        username: true,
        email: true,
        password: true,
        role: true,
        created_at: true,
        updated_at: true,
      },
    });

    if (!validUser) {
      throw new AuthenticationError('invalid credentials');
    }

    const matchPassword = bcrypt.compareSync(user.password, validUser.password);

    if (!matchPassword) {
      throw new AuthenticationError('invalid credentials');
    }

    return {
      id: validUser.id,
      username: validUser.username,
      email: validUser.email,
      role: validUser.role,
      createdAt: validUser.created_at,
      updatedAt: validUser.updated_at,
    };
  }
}

export default new UsersService();
