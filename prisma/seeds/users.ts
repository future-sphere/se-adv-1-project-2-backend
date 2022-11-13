import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'peter',
    email: 'peter@peter.com',
    password: 'peter',
    role: 'peter',
  },
];

//amongus
export const seedUsers = async (prisma: PrismaClient) => {
  console.log('Seeding users...');
  const now = new Date();
  for (let i = 0; i < users.length; i++) {
    const hash = bcrypt.hashSync(users[i].password);
    await prisma.user.create({
      data: {
        ...users[i],
        password: hash,
        createdAt: now,
        updatedAt: now,
      },
    });
  }
};
