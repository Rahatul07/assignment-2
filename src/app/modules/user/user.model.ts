import { ExistingUser, UserInterface } from './user.interface';
import { model } from 'mongoose';
import { UserSchema } from './user.schema';

export const UserModel = model<UserInterface, ExistingUser>('User', UserSchema);
