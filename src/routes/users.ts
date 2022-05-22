import { Router } from 'express';
import { fetchAllUsers } from '../controllers/users';

const usersRouter = Router();

usersRouter.get('/', fetchAllUsers);

export default usersRouter;
