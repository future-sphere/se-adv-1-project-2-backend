import { PrismaClient } from '@prisma/client';

export const seedPosts = async (prisma: PrismaClient) => {
  console.log('Seeding posts...');
  const now = new Date();
  await prisma.post.createMany({
    data: [
      {
        title: 'Post 1',
        content: 'Hello world!',
        createdAt: now,
        updatedAt: now,
      },
      {
        title: 'Post 2',
        content: 'This is a post!',
        createdAt: now,
        updatedAt: now,
      },
    ],
  });
};
