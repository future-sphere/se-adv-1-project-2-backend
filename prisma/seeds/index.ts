import {
  Gender,
  ListingCategory,
  ListingSubCategory,
  NewsCategory,
  PrismaClient,
} from '@prisma/client';
import bcrypt from 'bcryptjs';

export const seedListings = async (prisma: PrismaClient) => {
  console.log('Seeding start...');
  const now = new Date();
};
