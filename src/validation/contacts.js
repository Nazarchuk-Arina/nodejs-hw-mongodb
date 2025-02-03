import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.number().integer().min(6).max(16).required(),
  contactType: Joi.string().valid('work', 'home', 'personal').required(),
  email: Joi.string().email().required(),
  isFavourite: Joi.boolean(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.number().integer().min(6).max(16),
  contactType: Joi.string().valid('work', 'home', 'personal'),
  email: Joi.string().email(),
  isFavourite: Joi.boolean(),
});
