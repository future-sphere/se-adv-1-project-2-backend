// getProducts: GET /products
// getProductById: GET /products/:id
// createProduct: POST /products
// updateProduct: PUT /products/:id
// deleteProduct: DELETE /products/:id
// getProductsByCategoryId: GET /products/category/:id

import { prisma } from '../';
import { Request, Response } from 'express';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const data = await prisma.product.findMany();

    return res.json(data);
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await prisma.product.findFirst({
      //edward worked on it >:(
      where: {
        id: +id,
      },
    });
    return res.json(data);
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  //whar
  try {
    const {
      name,
      description,
      price,
      thumbnailImage,
      images,
      order,
      category,
    } = req.body;
    const now = new Date();
    const data = await prisma.product.create({
      data: {
        name,
        description,
        price,
        createdAt: now,
        updatedAt: now,
        thumbnailImage,
        images,
        category: {
          connect: {
            id: Number(category.id),
          },
        },
      },
    });
    return res.json(data);
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const now = new Date();
    const { id } = req.params;
    const data = await prisma.product.update({
      //EDWARD
      where: {
        id: Number(id),
      },
      data: {
        ...req.body,
        updatedAt: now,
        category: {
          connect: {
            id: Number(req.body.category.id),
          },
        },
      },
    });
    return res.json(data);
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const data = await prisma.product.delete({
      where: {
        id: +id,
      },
    });
    return res.json(data);
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};

export const getProductsByCategoryId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await prisma.product.findMany({
      where: {
        categoryId: +id,
      },
    });
    return res.json(data);
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};
