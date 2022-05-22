import { PrismaClient } from '@prisma/client';

const tags = [
  'amongus',
  'anime',
  'art',
  'astronomy',
  'atheism',
  'autos',
  'baseball',
  'basketball',
  'biology',
  'books',
  'business',
  'cricket',
];

export const seedTags = async (prisma: PrismaClient) => {
  console.log('Seeding tags...');
  const now = new Date();
  await prisma.tag.createMany({
    data: tags.map((tag) => ({
      name: tag,
      updatedAt: now,
    })),
  });
};
