import { Request, Response } from 'express';
import { prisma } from '../..';

export const fetchAllUsers = async (req: Request, res: Response) => {
  const data = await prisma.user.findMany();
  return res.json(data);
};
