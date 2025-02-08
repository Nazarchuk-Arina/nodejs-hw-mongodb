import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string()
    .pattern(/^\+380\d{9}$/)
    .required(),
  contactType: Joi.string().valid('work', 'home', 'personal').required(),
  email: Joi.string().email().required(),
  isFavourite: Joi.boolean(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.string().pattern(/^\+380\d{9}$/),
  contactType: Joi.string().valid('work', 'home', 'personal'),
  email: Joi.string().email(),
  isFavourite: Joi.boolean(),
});
