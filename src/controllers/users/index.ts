import { Request, Response } from 'express';
import { prisma } from '../..';
import bcrypt from 'bcryptjs';

export const fetchAllUsers = async (req: Request, res: Response) => {
  const data = await prisma.user.findMany();
  return res.json(data);
};

export const fetchUserById = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const data = await prisma.user.findFirst({
    include: {
      order: true,
    },
    where: {
      id: Number(userId),
    },
  });
  return res.json(data);
};

// Update user by user id: Austin
export const updateUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, password, role } = req.body;
  const data = await prisma.user.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      email,
      password,
      role,
    },
  });
  return res.json(data);
};

export const deleteUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await prisma.user.delete({
    where: {
      id: Number(id),
    },
  });
  return res.json(data);
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email, role, password } = req.body();
  const hash = bcrypt.hashSync(password);
  //I don't even see errors I have to refresh
  const data = await prisma.user.create({
    data: {
      name,
      email,
      role,
      password: hash,
    },
  });
  return res.json(data);
};

// Create user: accepts name, email, password, role, make sure you hash the password
