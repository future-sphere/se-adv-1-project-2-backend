// getOrders: GET /orders
// getOrderById: GET /orders/:id
// createOrder: POST /orders
// updateOrder: PUT /orders/:id
// deleteOrder: DELETE /orders/:id
// getOrdersByUserId: GET /orders/user/:id

import { Router } from 'express';
import {
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
  getOrdersByUserId,
} from '../controllers/orders';

const ordersRouter = Router();

ordersRouter.get('/', getOrders);
ordersRouter.get('/:id', getOrderById);
ordersRouter.post('/', createOrder);
ordersRouter.put('/:id', updateOrder);
ordersRouter.delete('/:id', deleteOrder);
ordersRouter.get('/user/:id', getOrdersByUserId);

export default ordersRouter;
