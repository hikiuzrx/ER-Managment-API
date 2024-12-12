import { PrismaClient } from '@prisma/client';
// Initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // Users to seed
  const users = [
    {
      fullName: 'Gueracha Ramzi Wassim',
      email: 'ramziwassim@gmail.com',
      username: 'Hiki',
      password: 'ramziwassim', // Consider hashing passwords in a real-world app
    },
    {
      fullName: 'Monkey D Luffy',
      email: 'Monkey.D@gmail.com',
      username: 'Yonko_Nika',
      password: 'thousand Suny Go',
    },
    {
      fullName: 'Issagi Youichi',
      email: 'issagiyo@gmail.com',
      username: 'egoist',
      password: 'I am a Striker',
    },
  ];

  // Seed users into the database
  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }

  console.log('Users seeded successfully.');
}

// Execute the seed script
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
