// getProducts: GET /products
// getProductById: GET /products/:id
// createProduct: POST /products
// updateProduct: PUT /products/:id
// deleteProduct: DELETE /products/:id
// getProductsByCategoryId: GET /products/category/:id

import { Router } from 'express';
import {
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getProductsByCategoryId,
} from '../controllers/product';
const productRouter = Router();

//edward :(

productRouter.get('/', getProducts);
productRouter.get('/:id', getProductById);
productRouter.post('/', deleteProduct);
productRouter.put('/:id', updateProduct);
productRouter.delete('/:id', deleteProduct);
productRouter.get('/:id', getProductsByCategoryId);


export default productRouter;

//👍