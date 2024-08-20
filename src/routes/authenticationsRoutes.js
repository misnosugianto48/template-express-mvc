import express from 'express';
import authenticationsController from '../controllers/AuthenticationsController.js';

const authRouter = express.Router();

authRouter.post(
  '/authentications',
  authenticationsController.postAuthentication
);

authRouter.put('/authentications', authenticationsController.putAuthentication);

authRouter.delete(
  '/authentications',
  authenticationsController.deleteAuthentication
);

export { authRouter };
