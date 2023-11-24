import { Schema, model } from 'mongoose';
import {
  TAddress,
  TOrders,
  TUser,
  TUserName,
  UserModel,
} from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';
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
  email: {
    type: String,
    unique: true,
  },
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
// Pre save middleware/hook: using to hashing password
userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});
// Post save middleware/hook
userSchema.post('save', function (doc, next) {
  next();
});
// Set the toJSON transform function to remove the password field
userSchema.set('toJSON', {
  transform: function (doc, ret) {
    delete ret.password;
    return ret;
  },
});
// Created a model
export const User = model<TUser, UserModel>('User', userSchema);
