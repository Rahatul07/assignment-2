import { Request, Response } from 'express';
import { UserModel } from '../user/user.model';
import { fetchingOrders, orderInsert, totalPrice } from './order.service';
import { OrdersJoi } from '../user/user.validate';

export const insertOrders = async (req: Request, res: Response) => {
  try {
    const { value, error } = await OrdersJoi.validate(req.body);
    if (error) {
      return res.status(400).send({
        success: false,
        message: error.message || 'Bad Request',
        error,
      });
    }
    const { userId } = await req.params;
    const existUser = await UserModel.isExistingUser(userId);
    if (!existUser) {
      throw new Error('User not found!');
    }
    await orderInsert(userId, value);
    return res.status(201).send({
      success: true,
      message: 'Order created successfully!',
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

export const getOrders = async (req: Request, res: Response) => {
  try {
    const { userId } = await req.params;
    const existUser = await UserModel.isExistingUser(userId);
    if (!existUser) {
      throw new Error('User not found!');
    }

    const result = await fetchingOrders(userId);
    return res.status(201).send({
      success: true,
      message: 'Order fetched successfully!',
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

export const getTotalPrice = async (req: Request, res: Response) => {
  try {
    const { userId } = await req.params;
    const existUser = await UserModel.isExistingUser(userId);
    if (!existUser) {
      throw new Error('User not found!');
    }

    const result = await totalPrice(userId);
    return res.status(201).send({
      success: true,
      message: 'Total price calculated successfully!',
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
