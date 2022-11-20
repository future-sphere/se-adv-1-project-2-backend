import { PrismaClient } from '@prisma/client';
import { seedUsers } from './seeds/users';
import { seedProducts } from './seeds/products';
import { seedCategory } from './seeds/category';
import { seedOrders } from './seeds/orders';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);
  await seedUsers(prisma);
  await seedCategory(prisma);
  await seedProducts(prisma);
  await seedOrders(prisma);
  //you were just draeming it never happened
  //smoosh them together idk
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
