import {
  Gender,
  ListingCategory,
  ListingSubCategory,
  NewsCategory,
  PrismaClient,
} from '@prisma/client';
import bcrypt from 'bcryptjs';

export const seedListings = async (prisma: PrismaClient) => {
  console.log('Seeding listings...');
  const now = new Date();

  const listing = await prisma.listing.create({
    data: {
      isOriginal: true,
      originalUrl: null,
      htmlTitle: 'Beautiful apartment in the center of the city',
      htmlBody: 'A great place to live in the city center!',
      category: ListingCategory.hiring,
      subCategory: ListingSubCategory.brooklyn,
      isSticky: false,
      isReviewed: true,
      createdAt: now,
      updatedAt: now,
      views: 0,
      likes: 0,
      shares: 0,
    },
  });

  console.log('Seeding users...');
  const hashed = bcrypt.hashSync('123');

  await prisma.user.create({
    data: {
      password: hashed,
      createdAt: now,
      updatedAt: now,
      lastActiveAt: now,
      userName: 'mxdi9i7',
      favoriteListings: {
        connect: [
          {
            id: listing.id,
          },
        ],
      },
      listings: {
        connect: [
          {
            id: listing.id,
          },
        ],
      },
      gender: Gender.male,
    },
  });

  console.log('Seeding news...');
  await prisma.news.create({
    data: {
      htmlBody: 'News body',
      htmlTitle: 'News title',
      category: NewsCategory.china,
      views: 0,
      likes: 0,
      shares: 0,
      createdAt: now,
      updatedAt: now,
    },
  });
};
