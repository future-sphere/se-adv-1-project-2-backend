import { PrismaClient } from '@prisma/client';

const products = [
  {
    name: 'iphone 69 pro max',
    price: 23498572093485723094857,
    description:
      'an overrated phone, just buy an older one for a fraction of the cost',
    thumbnailImage:
      'https://dealntechcdn.b-cdn.net/wp-content/uploads/2021/06/Apple-iPhone-14-Pro-Max-represents.jpg',
    images: [
      'https://dealntechcdn.b-cdn.net/wp-content/uploads/2021/06/Apple-iPhone-14-Pro-Max-represents.jpg',
    ],
  },
  {
    name: 'peter',
    price: 6.942,
    description: 'a homo sapiens peteris',
    thumbnailImage:
      'https://th.bing.com/th/id/R.0bf9b24d3a09a35203229b368842382e?rik=3HLY9GY33nkM1g&riu=http%3a%2f%2fs24990.pcdn.co%2fwp-content%2fuploads%2f2015%2f11%2fchimps.jpg&ehk=7waSCqK1Y8WnYvjwQwlHt5XjZzeOlm180nVciQruksc%3d&risl=&pid=ImgRaw&r=0',
    images: [
      'https://th.bing.com/th/id/R.0bf9b24d3a09a35203229b368842382e?rik=3HLY9GY33nkM1g&riu=http%3a%2f%2fs24990.pcdn.co%2fwp-content%2fuploads%2f2015%2f11%2fchimps.jpg&ehk=7waSCqK1Y8WnYvjwQwlHt5XjZzeOlm180nVciQruksc%3d&risl=&pid=ImgRaw&r=0',
    ],
  },
  {
    name: 'edward',
    price: 0,
    description: 'a monke',
    thumbnailImage:
      'https://images.fineartamerica.com/images-medium-large-5/2-australopithecus-afarensis-artwork-science-photo-library.jpg',
    images: [
      'https://images.fineartamerica.com/images-medium-large-5/2-australopithecus-afarensis-artwork-science-photo-library.jpg',
    ],
  },
  {
    name: 'peters wife',
    price: 999999999,
    description: 'make you much money lol',
    thumbnailImage:
      'https://th.bing.com/th/id/R.914bb8235392e3906f82c05363f8eb1b?rik=FnTA%2bjq1vTnhEA&riu=http%3a%2f%2felelur.com%2fdata_images%2fmammals%2fring-tailed-lemur%2fring-tailed-lemur-08.jpg&ehk=ln4FP9uYwOnURnOVpjaa%2bHlI3B5JPoxPAg6%2bGYatAb0%3d&risl=&pid=ImgRaw&r=0',
    images: [
      'https://th.bing.com/th/id/R.914bb8235392e3906f82c05363f8eb1b?rik=FnTA%2bjq1vTnhEA&riu=http%3a%2f%2felelur.com%2fdata_images%2fmammals%2fring-tailed-lemur%2fring-tailed-lemur-08.jpg&ehk=ln4FP9uYwOnURnOVpjaa%2bHlI3B5JPoxPAg6%2bGYatAb0%3d&risl=&pid=ImgRaw&r=0',
    ],
  },
  {
    name: 'The entirety of Australia',
    price: 1.93,
    description: 'just spiders and spiders, nothing much',
    thumbnailImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjraGVeY4TWbV6ojS2pXMP2vSAiIC2fpGRfMLO06wliE50q_XT75WboIrg4YBYDNFFig&usqp=CAU',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjraGVeY4TWbV6ojS2pXMP2vSAiIC2fpGRfMLO06wliE50q_XT75WboIrg4YBYDNFFig&usqp=CAU',
    ],
  },
];
export const seedProducts = async (prisma: PrismaClient) => {
  console.log('Seeding products');
  const now = new Date();
  const category = await prisma.category.findFirst();
  if (!category) {
    throw new Error('No category or user found');
  }
  //nononononono no non ono no
  await prisma.product.createMany({
    data: products.map((product) => ({
      ...product,
      createdAt: now,
      updatedAt: now,
      categoryId: category.id,
    })),
  });
};

//we didnt save
//
