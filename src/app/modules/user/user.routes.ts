import express from 'express';
import {
  createUser,
  deleteUser,
  getSingleUser,
  getUsers,
  updateUser,
} from './user.controller';
const router = express.Router();
// Create a user
router.post('/', createUser);
// Get all the users
router.get('/', getUsers);
// Get a single user
router.get('/:userId', getSingleUser);
// Update a user
router.put('/:userId', updateUser);
// Delete a user
router.delete('/:userId', deleteUser);

export default router;
