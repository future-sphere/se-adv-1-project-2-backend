import { PrismaClient } from '@prisma/client';

export const seedLikes = async (prisma: PrismaClient) => {
  console.log('Seeding likes...');
  const now = new Date();
  const user = await prisma.user.findFirst();
  const post = await prisma.post.findFirst();
  const comment = await prisma.comment.findFirst();
  if (user && post) {
    await prisma.like.createMany({
      data: [
        {
          createdAt: now,
          updatedAt: now,
          userId: user.id,
          postId: post.id,
        },
        {
          createdAt: now,
          updatedAt: now,
          userId: user.id,
          postId: post.id,
        },
      ],
    });
  }
  if (user && comment) {
    await prisma.like.createMany({
      data: [
        {
          createdAt: now,
          updatedAt: now,
          userId: user.id,
          commentId: comment.id,
        },
      ],
    });
  }
};
