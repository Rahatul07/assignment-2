import { Model } from 'mongoose';

export type TUserName = {
  firstName: string;
  lastName: string;
};
export type TAddress = {
  street: string;
  city: string;
  country: string;
};
export type TOrders = {
  productName: string;
  price: number;
  quantity: number;
};
export type TUser = {
  userId: number;
  username: string;
  password: string;
  fullName: TUserName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: 'gardening' | 'fishing' | 'playing_cricket';
  address: TAddress;
  orders: TOrders;
};
export interface UserModel extends Model<TUser> {
  // eslint-disable-next-line no-unused-vars
  isUserExist(id: string): Promise<TUser | null>;
}
