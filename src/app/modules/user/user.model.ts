import { Schema, model } from 'mongoose';
import {
  TAddress,
  TOrders,
  TUser,
  TUserName,
  UserModel,
} from './user.interface';

const userNameSchema = new Schema<TUserName>({
  firstName: { type: String },
  lastName: { type: String },
});

const addressSchema = new Schema<TAddress>({
  street: { type: String },
  city: { type: String },
  country: { type: String },
});

const ordersSchema = new Schema<TOrders>({
  productName: { type: String },
  price: { type: Number },
  quantity: { type: Number },
});

const userSchema = new Schema<TUser>({
  userId: {
    type: Number,
    unique: true,
  },
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    maxlength: [20, 'Password cannot be more than 20 characters'],
  },
  fullName: {
    type: userNameSchema,
  },
  age: { type: Number },
  email: { type: String },
  isActive: { type: Boolean },
  hobbies: {
    type: String,
    enum: {
      values: ['gardening', 'fishing', 'playing_cricket'],
      message: '{VALUE} is not valid',
    },
  },
  address: { type: addressSchema },
  orders: { type: ordersSchema },
});
// Created a model
export const User = model<TUser, UserModel>('User', userSchema);
