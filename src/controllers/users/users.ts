import { Request, Response } from 'express';
import { prisma } from '../..';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const deleteUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });
    return res.json(data);
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};

export const fetchAllUsers = async (req: Request, res: Response) => {
  try {
    const data = await prisma.user.findMany();
    return res.json(data);

  } catch (e) {
    return res.status(500).json({ message: e });
  }
};

export const updateUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        ...req.body,
      },
    });
    return res.json(data);
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};

export const fetchUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await prisma.user.findFirst({
      where: {
        id: +id,
      },
    });
    return res.json(data);
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body;
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }],
      },
    });
    if (existingUser) {
      return res.status(400).json({
        error: 'Email is already registered',
      });
    }

    const hash = bcrypt.hashSync(password);
    const data = prisma.user.create({
      data: {
        name,
        email,
        password: hash,
        role,
      },
    });
    return res.json(data);
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (!user) {
      return res.status(401).json({ message: 'Cannot find user' });
    }

    const valid = bcrypt.compareSync(password, user.password);
    if (!valid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const signedToken = jwt.sign(user.id.toString(), 'shhhhh');
    return res.json(signedToken);

  } catch (e) {
    return res.status(500).json({ message: e });
  }
};
