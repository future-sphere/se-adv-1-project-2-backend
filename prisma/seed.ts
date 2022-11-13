import { PrismaClient } from '@prisma/client';
import { seed } from './seeds';
import { seedUsers } from './seeds/users';
import { seedProducts } from './seeds/products';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);
  await seedUsers(prisma);
  //create the users
  //can yous
  await seedProducts(prisma);
  // peter what is 找不到名称“seedUsers”。ts  await seedUsers(prisma);
  // cant find a constant or smth named seedUser
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
