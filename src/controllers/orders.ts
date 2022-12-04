import { Request, Response } from 'express';
import { prisma } from './..';

// getOrders: GET /orders
// getOrderById: GET /orders/:id
// createOrder: POST /orders
// updateOrder: PUT /orders/:id
// deleteOrder: DELETE /orders/:id
// getOrdersByUserId: GET /orders/user/:id
//owen is... awol
export const getOrders = async (req: Request, res: Response) => {
  try {
    const data = await prisma.order.findMany();
    return res.json(data);
  } catch (e) {
    return res.status(500).json({ message: 'Could not get orders' });
  }
};
export const getOrderById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await prisma.order.findFirst({
      where: {
        id: Number(id),
      },
    });

    return res.json(data);
  } catch (e) {
    return res.status(500).json({ message: 'Could not get order by id' });
  }
};

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { userId, products, status } = req.body;
    const now = new Date();
    const data = await prisma.order.create({
      data: {
        createdAt: now,
        updatedAt: now,
        user: {
          connect: {
            id: Number(userId),
          },
        },
        products: {
          connect: products.map((product: any) => ({
            id: Number(product.id),
          })),
        },
        status,
      },
    });
    return res.json(data);
  } catch (e) {
    return res.status(500).json({ message: 'Could not create order' });
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { products, status } = req.body;
    const now = new Date();
    const data = await prisma.order.update({
      where: {
        id: Number(id),
      },
      data: {
        updatedAt: now,
        products: {
          connect: products.map((product: any) => ({
            id: Number(product.id),
          })),
        },
        status,
      },
    });
    return res.json(data);
  } catch (e) {
    return res.status(500).json({ message: 'Could not update order' });
  }
};

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await prisma.order.delete({
      where: {
        id: Number(id),
      },
    });
    return res.json(data);
  } catch (e) {
    return res.status(500).json({ message: 'Could not delete order' });
  }
};

export const getOrdersByUserId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await prisma.order.findMany({
      where: {
        userId: Number(id),
      },
    });
    return res.json(data);
  } catch (e) {
    return res.status(500).json({ message: 'Could not get orders by id' });
  }
};
