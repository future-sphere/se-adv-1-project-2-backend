import { PrismaClient } from '@prisma/client';
const category = [
  {
    name: 'Peter',
    products: ['peter', 'peters wife'],
    thumbnailImage: 'peter_lol',
  },
];

export const seedCategory = async (prisma: PrismaClient) => {
  console.log('Seeding categories...');
  //
  const now = new Date();
  for (let i = 0; i < category.length; i++) {
    await prisma.category.createMany({
      data: [
        ...category.map((category) => ({
          name: category.name,
          thumbnailImage: category.thumbnailImage,
          createdAt: now,
          updatedAt: now,
        })),
      ],
    });
  }
};
