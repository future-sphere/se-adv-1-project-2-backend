import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { seedProducts } from './products';
import { seedUsers } from './users';

export const seed = async (prisma: PrismaClient) => {
  console.log('Seeding start...');

  // seed a user, customize their info as you like

  // assignments: alex do users, ben do category, austin/owe/edward do products (2) with category, becky do orders
  seedUsers(prisma);
  seedProducts(prisma);
};
