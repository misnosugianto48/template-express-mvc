import Joi from 'joi';

const createUserValidator = Joi.object({
  username: Joi.string().min(5).required(),
  email: Joi.string().min(5).required(),
  password: Joi.string().min(8).required(),
  role: Joi.string().optional(),
});

export default { createUserValidator };
