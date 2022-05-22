import { PrismaClient } from '@prisma/client';

export const seedComments = async (prisma: PrismaClient) => {
  console.log('Seeding comments...');
  const now = new Date();
  const user = await prisma.user.findFirst();
  const post = await prisma.post.findFirst();
  if (user && post) {
    await prisma.comment.createMany({
      data: [
        {
          content: 'Hello world!',
          createdAt: now,
          updatedAt: now,
          userId: user.id,
          postId: post.id,
        },
        {
          content: 'This is a comment!',
          createdAt: now,
          updatedAt: now,
          userId: user.id,
          postId: post.id,
        },
      ],
    });
  }
};
