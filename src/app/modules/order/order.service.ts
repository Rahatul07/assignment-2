import { Orders } from '../user/user.interface';
import { UserModel } from '../user/user.model';

export const orderInsert = async (id: string, order: Orders) => {
  return await UserModel.updateOne(
    { userId: id },
    {
      $push: {
        orders: {
          productName: order.productName,
          price: order.price,
          quantity: order.quantity,
        },
      },
    },
  );
};

export const fetchingOrders = async (id: string) => {
  return await UserModel.findOne({ userId: id }, { orders: 1, _id: 0 });
};

export const totalPrice = async (id: string) => {
  return await UserModel.aggregate([
    {
      $match: { userId: parseInt(id) },
    },
    {
      $unwind: '$orders',
    },
    {
      $group: {
        _id: null,
        total: {
          $sum: {
            $multiply: ['$orders.price', '$orders.quantity'],
          },
        },
      },
    },
    {
      $project: {
        _id: 0,
        total: 1,
      },
    },
  ]);
};
