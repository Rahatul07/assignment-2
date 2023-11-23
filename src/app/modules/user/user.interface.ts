import { Model } from 'mongoose';

export type UserName = {
  firstName: string;
  lastName: string;
};
export type Address = {
  street: string;
  city: string;
  country: string;
};
export type Orders = {
  productName: string;
  price: number;
  quantity: number;
};
export type User = {
  userId: number;
  username: string;
  password: string;
  fullName: UserName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: 'gardening' | 'fishing' | 'playing_cricket';
  address: Address;
  orders: Orders;
};
export interface UserModel extends Model<User> {
  // eslint-disable-next-line no-unused-vars
  isUserExist(id: string): Promise<User | null>;
}
