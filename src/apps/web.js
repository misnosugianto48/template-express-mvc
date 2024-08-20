import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import { usersRouter } from '../routes/usersRoutes.js';
import { errorMiddleware } from '../middlewares/errorMiddleware.js';
import { authRouter } from '../routes/authenticationsRoutes.js';

export const web = express();
web.use(express.json());
web.use(express.urlencoded({ extended: true }));
web.use(morgan('dev'));
web.use(cors());
web.use(helmet());

web.use('/api/v1', usersRouter);
web.use('/api/v1', authRouter);

web.use(errorMiddleware);
