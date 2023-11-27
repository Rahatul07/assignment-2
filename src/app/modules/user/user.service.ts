import { UserInterface } from './user.interface';
import { UserModel } from './user.model';
// Create a user
export const SUserCreate = async (user: UserInterface) => {
  return await UserModel.create(user);
};
