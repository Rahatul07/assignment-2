import express from 'express';
import { getOrders, getTotalPrice, insertOrders } from './order.controller';

const orderRouter = express.Router();
// Create an order route
orderRouter.put('/:userId/orders', insertOrders);
// Get an order route
orderRouter.get('/:userId/orders', getOrders);
// Get the total of the orders
orderRouter.get('/:userId/orders/total-price', getTotalPrice);

export default orderRouter;
