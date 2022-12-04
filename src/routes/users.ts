// userLogin: POST /users/login

import { Request, Response, Router } from 'express';
import {
  deleteUserById,
  fetchAllUsers,
  updateUserById,
  fetchUserById,
  createUser,
  loginUser,
} from '../controllers/users/users';

const usersRouter = Router();

usersRouter.get('/', fetchAllUsers);
usersRouter.put('/:id', updateUserById);
usersRouter.delete('/:id', deleteUserById);
usersRouter.post('/login', loginUser);
usersRouter.get('/:id', fetchUserById);
usersRouter.post('/', createUser);

export default usersRouter;
