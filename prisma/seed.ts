import { PrismaClient } from '@prisma/client';
// Initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // Users to seed
  const users = [
    {
      fullName: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      username: 'alicejohnson',
      password: 'password123', // Consider hashing passwords in a real-world app
    },
    {
      fullName: 'Bob Smith',
      email: 'bob.smith@example.com',
      username: 'bobsmith',
      password: 'securepassword456',
    },
    {
      fullName: 'Charlie Brown',
      email: 'charlie.brown@example.com',
      username: 'charliebrown',
      password: 'mypassword789',
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
