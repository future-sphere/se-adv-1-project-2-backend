import { prisma } from '../../index';
import { Request, Response } from 'express';

export const fetchAllTeachers = async (req: Request, res: Response) => {
  const data = await prisma.teacher.findMany();
  return res.json(data);
};

export const fetchTeacherById = async (req: Request, res: Response) => {
  if (!req.params.id) {
    return res.json({
      message: 'Please provide a teacher id',
    });
  }
  if (typeof +req.params.id !== 'number') {
    return res.json({
      message: 'Please provide a valid teacher id',
    });
  }

  const data = await prisma.teacher.findUnique({
    where: {
      id: +req.params.id,
    },
  });
  return res.json(data);
};

export const updateTeacherById = async (req: Request, res: Response) => {
  if (!req.params.id) {
    return res.json({
      message: 'Please provide a teacher id',
    });
  }
  if (typeof +req.params.id !== 'number') {
    return res.json({
      message: 'Please provide a valid teacher id',
    });
  }
  const data = await prisma.teacher.update({
    where: {
      id: +req.params.id,
    },
    data: {
      ...req.body,
    },
  });
  return res.json(data);
};

export const deleteTeacherById = async (req: Request, res: Response) => {
  if (!req.params.id) {
    return res.json({
      message: 'Please provide a teacher id',
    });
  }
  if (typeof +req.params.id !== 'number') {
    return res.json({
      message: 'Please provide a valid teacher id',
    });
  }
  const data = await prisma.teacher.delete({
    where: {
      id: +req.params.id,
    },
  });
  return res.json(data);
};

export const createTeacher = async (req: Request, res: Response) => {
  const data = await prisma.teacher.create({
    data: {
      ...req.body,
    },
  });
  return res.json(data);
};
