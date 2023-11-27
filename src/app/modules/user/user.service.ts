import { UserInterface } from './user.interface';
import { UserModel } from './user.model';

export const SUserCreate = async (user: UserInterface) => {
  return await UserModel.create(user);
};
