import { Router } from 'express';
import {
  createTeacher,
  deleteTeacherById,
  fetchAllTeachers,
  fetchTeacherById,
  updateTeacherById,
} from '../controllers/teachers';

const teachersRouter = Router();

teachersRouter.get('/', fetchAllTeachers);
teachersRouter.get('/:id', fetchTeacherById);
teachersRouter.put('/:id', updateTeacherById);
teachersRouter.delete('/:id', deleteTeacherById);
teachersRouter.post('/', createTeacher);

export default teachersRouter;
