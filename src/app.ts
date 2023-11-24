import express, { Application } from 'express';
import cors from 'cors';
import { userRoutes } from './app/modules/user/user.route';
const app: Application = express();
// parser
app.use(express.json());
app.use(cors());
// Application routes
app.use('/api/users', userRoutes);

export default app;
