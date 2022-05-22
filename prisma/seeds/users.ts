import { PrismaClient } from '@prisma/client';

const users = [
  {
    email: 'john.doe@example.com',
    firstName: 'John',
    lastName: 'Doe',
    password: '123',
    username: 'john.doe',
  },
  {
    email: 'jane.doe@example.com',
    firstName: 'Jane',
    lastName: 'Doe',
    password: '321',
    username: 'jane.doe',
  },
  {
    email: 'jim.jackson@example.com',
    firstName: 'Jim',
    lastName: 'Jackson',
    password: '456',
    username: 'jim.jackson',
  },
];

export const seedUsers = async (prisma: PrismaClient) => {
  console.log('Seeding users...');
  const group = await prisma.group.findFirst();
  for (let i = 0; i < users.length; i++) {
    await prisma.user.create({
      data: {
        ...users[i],
        groups: group
          ? {
              connect: [{ id: group.id }],
            }
          : undefined,
      },
    });
  }
};
