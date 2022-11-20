import { PrismaClient } from '@prisma/client';

// const products = [
//      {
//        name: 'rubber duck',
//        price: '5',
//        description: 'a squeaky duck made of rubber',
//        thumbnailImage: 'https://imgprd19.hobbylobby.com/a/f4/72/af472646fe1c4e252aff5812af39de9f0cba400c/1400Wx1400H-975466-020520.jpg',
//        images: [
//         'https://imgprd19.hobbylobby.com/a/f4/72/af472646fe1c4e252aff5812af39de9f0cba400c/1400Wx1400H-975466-020520.jpg'
//        ]
//      }
//     ]

export const seedProducts = async (prisma: PrismaClient) => {
  console.log('Seeding products');
  const now = new Date();
  const category = await prisma.category.findFirst();
  if (!category) {
    throw new Error('No category or user found');
  }
  // await prisma.product.createMany({
  //   data: products.map((product) => ({
  //     ...product,
  //     createdAt: now,
  //     updatedAt: now,
  //     categoryId: category.id,
  //   })),
  // });
};
