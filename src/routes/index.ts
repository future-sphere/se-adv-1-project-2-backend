import { Router } from 'express';
import teachersRouter from './teachers';

const baseRouter = Router();

baseRouter.use('/teachers', teachersRouter);

export default baseRouter;
