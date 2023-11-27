import express from 'express';
import { getOrders, getTotalPrice, insertOrders } from './order.controller';

const orderRouter = express.Router();

orderRouter.put('/:userId/orders', insertOrders);

orderRouter.get('/:userId/orders', getOrders);

orderRouter.get('/:userId/orders/total-price', getTotalPrice);

export default orderRouter;
