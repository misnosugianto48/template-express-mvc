import autoBind from 'auto-bind';
import usersService from '../services/postgres/UsersService.js';

class UsersController {
  constructor() {
    autoBind(this);
  }

  async postUser(req, res, next) {
    try {
      const { username, email, password } = req.body;
      const result = await usersService.createUser({
        username,
        email,
        password,
      });

      res.status(201).json({
        status: 'created',
        message: 'user created successfully',
        data: result,
      });
    } catch (e) {
      next(e);
    }
  }

  getUsers(req, res, next) {
    try {
      res.json({
        data: 'Ini return users',
      });
    } catch (e) {
      next(e);
    }
  }
}

export default new UsersController();
