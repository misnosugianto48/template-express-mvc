import Joi from 'joi';

const addAuthenticationValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const editAuthenticationValidator = Joi.object({
  refreshToken: Joi.string().required(),
});

const deleteAuthenticationValidator = Joi.object({
  refreshToken: Joi.string().required(),
});

export default {
  addAuthenticationValidator,
  editAuthenticationValidator,
  deleteAuthenticationValidator,
};
