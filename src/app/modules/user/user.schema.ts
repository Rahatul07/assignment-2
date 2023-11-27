import { Schema } from 'mongoose';
import { ExistingUser, UserInterface } from './user.interface';
import bcrypt from 'bcrypt';

export const UserSchema = new Schema<UserInterface, ExistingUser>(
  {
    userId: {
      type: Number,
      unique: true,
      required: [true, 'User ID is required'],
    },
    username: {
      type: String,
      unique: true,
      required: [true, 'Username is required'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters'],
      maxlength: [18, 'Password must not exceed 18 characters'],
    },
    age: {
      type: Number,
      required: [true, 'Age is required'],
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required'],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    hobbies: {
      type: [String],
      default: [],
    },
    address: {
      street: {
        type: String,
        required: [true, 'Street is required'],
      },
      city: {
        type: String,
        required: [true, 'City is required'],
      },
      country: {
        type: String,
        required: [true, 'Country is required'],
      },
    },
    orders: {
      type: [Object],
      default: [],
    },
  },
  {
    versionKey: false,
  },
);

UserSchema.statics.isExistingUser = function (userId: string) {
  return this.findOne({ userId });
};

UserSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

UserSchema.post('save', async function (doc, next) {
  doc.set('password', undefined, { strict: false });
  next();
});
