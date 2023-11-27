import express from 'express';
import {
  createUser,
  deleteUser,
  getSingleUser,
  getUsers,
  updateUser,
} from './user.controller';
const router = express.Router();

router.post('/', createUser);

router.get('/', getUsers);

router.get('/:userId', getSingleUser);

router.put('/:userId', updateUser);

router.delete('/:userId', deleteUser);

export default router;
