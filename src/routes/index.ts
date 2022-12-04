import { Router } from 'express';
import usersRouter from './users';
import categoryRouter from './category';
import ordersRouter from './orders';
import productRouter from './product';
const baseRouter = Router();

baseRouter.use('/users', usersRouter);
baseRouter.use('/category', categoryRouter);
baseRouter.use('/orders', ordersRouter);
baseRouter.use('/products', productRouter);

export default baseRouter;
