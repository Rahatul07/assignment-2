import express, { Application, Request, Response } from 'express';
import router from './app/modules/user/user.routes';
import orderRouter from './app/modules/order/order.route';
const app: Application = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/users', router);
app.use('/api/users', orderRouter);

app.get('/', (req: Request, res: Response) => {
  return res.status(200).send({
    message: 'Welcome to the api of assignment',
    status: 200,
  });
});

export default app;
