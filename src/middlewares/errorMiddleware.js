import { ClientError } from '../exceptions/ClientError.js';

const errorMiddleware = (err, req, res, next) => {
  if (!err) {
    return next();
  }

  if (err instanceof Error) {
    if (err instanceof ClientError) {
      res
        .status(err.statusCode)
        .json({
          status: 'fail',
          message: err.message,
        })
        .end();
    } else {
      res
        .status(500)
        .json({
          status: 'internal server error',
          message: err.message,
        })
        .end();
    }
  }
};

export { errorMiddleware };
