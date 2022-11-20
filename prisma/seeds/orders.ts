import { PrismaClient } from '@prisma/client';

export const seedOrders = async (prisma: PrismaClient) => {
  console.log('Seeding orders.');
  const now = new Date();
  const user = await prisma.user.findFirst();
  const product = await prisma.product.findFirst();
  if (!user || !product) {
    throw new Error('No user or product found');
  }
  const order = await prisma.order.create({
    data: {
      user: {
        connect: {
          id: user?.id,
        },
      },
      // me think so
      createdAt: now,
      updatedAt: now,
      products: {
        connect: {
          id: product?.id,
        },
      },
      status: 'En route',
    },
  });
};
// me thinnks?
