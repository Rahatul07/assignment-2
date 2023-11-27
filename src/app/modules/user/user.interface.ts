// import { Model } from 'mongoose';

// export type TUserName = {
//   firstName: string;
//   lastName: string;
// };
// export type TAddress = {
//   street: string;
//   city: string;
//   country: string;
// };
// export type TOrders = {
//   productName: string;
//   price: number;
//   quantity: number;
// };
// export type TUser = {
//   userId: number;
//   username: string;
//   password: string;
//   fullName: TUserName;
//   age: number;
//   email: string;
//   isActive: boolean;
//   hobbies: string[];
//   address: TAddress;
//   orders: TOrders;
// };
// // For creating static Method
// // export interface ExistingUser extends Model<TUser> {
// //   // eslint-disable-next-line no-unused-vars
// //   isUserExist(userId: number): Promise<TUser | null>;
// // }

// export interface ExistingUser extends Model<TUser> {
//   // eslint-disable-next-line no-unused-vars
//   isExistingUser(id: string): Promise<TUser | null>;
// }
import { Model } from 'mongoose';

export type Orders = {
  productName: string;
  price: number;
  quantity: number;
};

export type UserInterface = {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  orders: Orders[];
};

export interface ExistingUser extends Model<UserInterface> {
  // eslint-disable-next-line no-unused-vars
  isExistingUser(id: string): Promise<UserInterface | null>;
}
