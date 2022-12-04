// getCategories: GET /category
// getCategoryById: GET /category/:id
// createCategory: POST /category
// updateCategory: PUT /category/:id
// deleteCategory: DELETE /category/:id

import { Router } from 'express';
import {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from '../controllers/category'; 

const categoryRouter = Router();

categoryRouter.get('/', getCategories);
categoryRouter.get('/:id', getCategoryById);
categoryRouter.post('/create', createCategory);
categoryRouter.put('/:id', updateCategory);
categoryRouter.delete('/:id', deleteCategory);

export default categoryRouter;
// alex
