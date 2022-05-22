import { PrismaClient } from '@prisma/client';

const groups = [
  {
    name: 'Computers',
  },
  {
    name: 'Cats',
  },
  {
    name: 'Camping',
  },
  {
    name: 'Cars',
  },
  {
    name: 'Video Games',
  },
  {
    name: 'League of Legends',
  },
  {
    name: 'Geese and ducks',
  },
  {
    name: 'Dogs',
  },
  {
    name: 'Asians',
  },
  {
    name: 'Coding',
  },
];

export const seedGroups = async (prisma: PrismaClient) => {
  console.log('Seeding groups...');
  const now = new Date();
  await prisma.group.createMany({
    data: [
      ...groups.map((group) => ({
        name: group.name,
        updatedAt: now,
      })),
    ],
  });
};
