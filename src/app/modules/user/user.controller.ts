import { Request, Response } from 'express';
const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;
  } catch (err) {}
};
