import { PrismaClient } from '@prisma/client';
import { seedComments } from './seeds/comments';
import { seedFriendships } from './seeds/friendships';
import { seedGroups } from './seeds/groups';
import { seedLikes } from './seeds/likes';
import { seedPosts } from './seeds/posts';
import { seedTags } from './seeds/tags';
import { seedUsers } from './seeds/users';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  // Create groups for users
  await seedGroups(prisma);
  // Create users
  await seedUsers(prisma);
  // Create tags for posts
  await seedTags(prisma);

  // Create posts
  await seedPosts(prisma);

  // Create comments for posts
  await seedComments(prisma);

  // Create likes for posts
  // Create likes for comments
  await seedLikes(prisma);

  // Create friendship
  await seedFriendships(prisma);

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
