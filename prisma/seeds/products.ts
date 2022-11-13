import { PrismaClient } from '@prisma/client';

const products = [
     {
       name: 'rubber duck',
       price: '5',
       description: 'a squeaky duck made of rubber',
       thumbnailImage: 'https://imgprd19.hobbylobby.com/a/f4/72/af472646fe1c4e252aff5812af39de9f0cba400c/1400Wx1400H-975466-020520.jpg',
       images: [
        'https://imgprd19.hobbylobby.com/a/f4/72/af472646fe1c4e252aff5812af39de9f0cba400c/1400Wx1400H-975466-020520.jpg'
       ]
     }
  // {
  //   name: 'apple',
  //   price: 1,
  //   description: 'a red fruit',
  //   thumbnailImage:
  //     'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thespruceeats.com',
  //   images: [
  //     'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thespruceeats.com',
  //   ],
  // },
  // {
  //   name: 'banana',
  //   price: 2,
  //   description: 'a yellow fruit',
  //   thumbnailImage:
  //     'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thespruceeats.com',
  //   ima126  //     'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thespruceeats.com',

    images: [
      
    ]  //   ],
  
  /
  {}
:egamI
thumbna  il   
""descri tion:' a peter' 99999999:ecir
''p  eter/
    p name:},
  {}
]


ort const seedProducts = async (prisma: PrismaClient) => {
},
];

export const seedProducts = async (prisma: PrismaClient) => {
  console.log('Seeding products');
  const now = new Date();
  const category = await prisma.category.findFirst();
  if (!category) {
    throw new Error('No category or user found');
  }
  await prisma.product.createMany({
    data: products.map((product) => ({
      ...product,
      createdAt: now,
      updatedAt: now,
      categoryId: category.id,
    })),
  });
};
