import { ClientError } from '../exceptions/ClientError.js';

const validate = (schema, request) => {
  const result = schema.validate(request, {
    abortEarly: false,
    allowUnknown: false,
  });
  if (result.error) {
    throw new ClientError(result.error.message);
  }

  return result.value;
};

export { validate };
