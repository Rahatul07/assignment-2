import { Request, Response } from 'express';

import { UserModel } from './user.model';
import { UserJoiValidation, updateUserJoiValidation } from './user.validate';
import { SUserCreate } from './user.service';

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await req.body;
    const { value, error } = await UserJoiValidation.validate(user);
    if (error) {
      return res.status(400).send({
        success: false,
        message: error.message || 'Bad Request',
        error,
      });
    }
    const result = await SUserCreate(value);
    return res.status(201).send({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return res.status(500).send({
      success: false,
      message: error.message || 'Internal Server Error',
      error,
    });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserModel.find(
      {},
      { username: 1, fullName: 1, age: 1, email: 1, address: 1 },
    );
    return res.status(200).send({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return res.status(500).send({
      success: false,
      message: error.message || 'Internal Server Error',
      error,
    });
  }
};

export const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = await req.params;
    const existUser = await UserModel.isExistingUser(userId);
    if (!existUser) {
      throw new Error('User not found!');
    }
    const result = await UserModel.findOne(
      { userId },
      {
        password: 0,
      },
    );
    return res.status(200).send({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return res.status(500).send({
      success: false,
      message: error.message,
      error: {
        code: 404,
        description: error.message,
      },
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = await req.params;
    const user = await req.body;
    const { value, error } = await updateUserJoiValidation.validate(user);
    if (error) {
      return res.status(400).send({
        success: false,
        message: error.message || 'Bad Request',
        error,
      });
    }
    const existUser = await UserModel.isExistingUser(userId);
    if (!existUser) {
      throw new Error('User not found!');
    }
    const result = await UserModel.findOneAndUpdate({ userId }, value, {
      new: true,
      projection: {
        password: 0,
        orders: 0,
      },
    });
    return res.status(200).send({
      success: true,
      message: 'User updated successfully!',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return res.status(500).send({
      success: false,
      message: error.message,
      error: {
        code: 404,
        description: error.message,
      },
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = await req.params;
    const existUser = await UserModel.isExistingUser(userId);
    if (!existUser) {
      throw new Error('User not found!');
    }
    await UserModel.findOneAndDelete({ userId });
    return res.status(200).send({
      success: true,
      message: 'User deleted successfully!',
      data: null,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return res.status(500).send({
      success: false,
      message: error.message,
      error: {
        code: 404,
        description: error.message,
      },
    });
  }
};
