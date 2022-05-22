import { PrismaClient } from '@prisma/client';

export const seedFriendships = async (prisma: PrismaClient) => {
  console.log('Seeding friendships...');
  const now = new Date();
  const users = await prisma.user.findMany();

  if (users.length) {
    await prisma.friendship.create({
      data: {
        createdAt: now,
        updatedAt: now,
        accepted: true,
        users: {
          connect: [{ id: users[0].id }, { id: users[1].id }],
        },
      },
    });
  }
};
