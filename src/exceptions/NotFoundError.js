import { ClientError } from './ClientError.js';

class NotFoundError extends ClientError {
  constructor(message) {
    super(message, 404, 'NotFoundError');
  }
}

export { NotFoundError };
