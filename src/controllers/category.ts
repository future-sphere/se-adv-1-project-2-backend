import { prisma } from '../';
import { Request, Response } from 'express';

export const getCategories = async (req: Request, res: Response) => {
  try {
    const data = await prisma.category.findMany();

    return res.json(data);
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};

export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await prisma.category.findFirst({
      where: {
        id: +id,
      },
    });
    return res.json(data);
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};
export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name, products, thumbnailImage, createdAt, updatedAt } = req.body;
    const data = await prisma.category.create({
      data: { name, createdAt, updatedAt, thumbnailImage, products },
    });
    return res.json(data);
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const data = await prisma.category.update({
      where: {
        id: +id,
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

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await prisma.category.delete({
      where: {
        id: +id,
      },
    });
    return res.json(data);
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};
//thanks
