import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const category = [
  {
    name: 'Peter',
    products: ['peter', 'alex'],
  },
];
export const seed = async (prisma: PrismaClient) => {
  console.log('Seeding categories...');

  const product = await prisma.product.findFirst();
  const now = new Date();
  for (let i = 0; i < category.length; i++) {
    await prisma.category.create(
      
    )

    }

//this is the groups seed from se-adv-project-1, and category is very similar to groups, see what you get from it

// import { PrismaClient } from '@prisma/client'
    
// const groups = [
//   {
//     name: 'Computers',
//   },
//   {
//     name: 'Cats',
//   },
//   {
//     name: 'Camping',
//   },
//   {
//     name: 'Cars',
//   },
//   {
//     name: 'Video Games',
//   },
//   {
//     name: 'League of Legends',
//   },
//   {
//     name: 'Geese and ducks',
//   },
//   {
//     name: 'Dogs',
//   },
//   {
//     name: 'Asians',
//   },
//   {
//     name: 'Coding',
//   },
// ];

// export const seedGroups = async (prisma: PrismaClient) => {
//   console.log('Seeding groups...');
//   const now = new Date();
//   await prisma.group.createMany({
//     data: [
//       ...groups.map((group) => ({
//         name: group.name,
//         updatedAt: now,
//       })),
//     ],
//   });
// };
//hmm no for loop