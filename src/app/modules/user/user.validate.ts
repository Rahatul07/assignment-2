import Joi from 'joi';

export const OrdersJoi = Joi.object({
  productName: Joi.string().required(),
  price: Joi.number().required(),
  quantity: Joi.number().required(),
});

export const UserJoiValidation = Joi.object({
  userId: Joi.number().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  fullName: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  }).required(),
  age: Joi.number().required(),
  email: Joi.string().email().required(),
  isActive: Joi.boolean().default(true),
  hobbies: Joi.array().default([]),
  address: Joi.object({
    street: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
  }).required(),
  orders: Joi.array().items(OrdersJoi).default([]),
});

export const updateUserJoiValidation = Joi.object({
  userId: Joi.number(),
  username: Joi.string(),
  password: Joi.string(),
  fullName: Joi.object({
    firstName: Joi.string(),
    lastName: Joi.string(),
  }),
  age: Joi.number(),
  email: Joi.string().email(),
  isActive: Joi.boolean().default(true),
  hobbies: Joi.array().default([]),
  address: Joi.object({
    street: Joi.string(),
    city: Joi.string(),
    country: Joi.string(),
  }),
});
