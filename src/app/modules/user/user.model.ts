import { Schema, model } from 'mongoose';
import {
  TAddress,
  TOrders,
  TUser,
  TUserName,
  UserModel,
} from './user.interface';

const userNameSchema = new Schema<TUserName>({
  firstName: { type: String, required: [true, 'First name is required.'] },
  lastName: { type: String, required: [true, 'Last name is required.'] },
});

const addressSchema = new Schema<TAddress>({
  street: { type: String, required: [true, 'Street is required.'] },
  city: { type: String, required: [true, 'City is required.'] },
  country: { type: String, required: [true, 'Country is required.'] },
});

const ordersSchema = new Schema<TOrders>({
  productName: { type: String, required: [true, 'Product name is required.'] },
  price: { type: Number, required: [true, 'Price is required.'] },
  quantity: { type: Number, required: [true, 'Quantity is required.'] },
});

const userSchema = new Schema<TUser>({
  userId: {
    type: Number,
    required: [true, 'User ID is required.'],
    unique: true,
  },
  username: {
    type: String,
    required: [true, 'Username is required.'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required.'],
    maxlength: [20, 'Password cannot be more than 20 characters'],
  },
  fullName: {
    type: userNameSchema,
    required: [true, 'Full name is required.'],
  },
  age: { type: Number, required: [true, 'Age is required.'] },
  email: { type: String, required: [true, 'Email is required.'] },
  isActive: { type: Boolean, required: [true, 'isActive is required.'] },
  hobbies: {
    type: String,
    required: [true, 'Hobbies are required.'],
    enum: {
      values: ['gardening', 'fishing', 'playing_cricket'],
      message: '{VALUE} is not valid',
    },
  },
  address: { type: addressSchema, required: [true, 'Address is required.'] },
  orders: { type: ordersSchema },
});

// Created a model
export const User = model<TUser, UserModel>('User', userSchema);
