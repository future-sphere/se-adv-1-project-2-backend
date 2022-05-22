import { Router } from 'express';
import usersRouter from './users';

const baseRouter = Router();

baseRouter.use('/users', usersRouter);

export default baseRouter;
