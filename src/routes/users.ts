import { Request, Response, Router } from 'express';
import {
  deleteUserById,
  fetchAllUsers,
  updateUserById,
  fetchUserById,
  createUser,
} from '../controllers/users';

const usersRouter = Router();

usersRouter.get('/', fetchAllUsers);
usersRouter.put('/:id', updateUserById);
usersRouter.delete('/:id', deleteUserById);
usersRouter.get('/:id', fetchUserById);
usersRouter.post('/', createUser);
// create user: POST /users
export default usersRouter;
