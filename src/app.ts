import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { userRoutes } from './app/modules/users/user.route';
const app: Application = express();
// parser
app.use(express.json());
app.use(cors());
// Application routes
app.use('/api/v1/users', userRoutes);
app.get('/', (req: Request, res: Response) => {
  res.send();
});
export default app;
