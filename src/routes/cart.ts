/*
Build cart routes:
- GET /cart/:id - get all items in cart by id
- PUT /cart/:id - update item in cart by id
- DELETE /cart/:id - delete all items from cart by id
- GET /cart/user/:id - get all items in cart by user id
- GET /cart/total/:id - get total price of items in cart by id
*/

import { Router } from 'express';
import {
  updateCart,
  getItemsFromCart,
  clearItemsFromCart,
  getTotalFromCart,
  getItemsInCartByUser,
} from '../controllers/cart';

const cartRouter = Router();

cartRouter.get('/:id', getItemsFromCart);
cartRouter.get('/total/:id', getTotalFromCart);
cartRouter.get('/user/:id', getItemsInCartByUser);
cartRouter.put('/', updateCart);
cartRouter.delete('/:id', clearItemsFromCart);
