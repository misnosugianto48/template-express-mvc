import { ClientError } from './ClientError.js';

class InvariantError extends ClientError {
  constructor(message) {
    super(message, 'InvariantError');
  }
}

export { InvariantError };
