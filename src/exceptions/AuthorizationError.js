import { ClientError } from './ClientError.js';

class AuthorizationError extends ClientError {
  constructor(message) {
    super(message, 401, 'AuthenticationError');
  }
}

export { AuthorizationError };
