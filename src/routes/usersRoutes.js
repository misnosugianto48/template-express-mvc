import express from 'express';
import usersController from '../controllers/UsersController.js';

const usersRouter = express.Router();

usersRouter.get('/users', usersController.getUsers);
usersRouter.post('/users', usersController.postUser);

export { usersRouter };
