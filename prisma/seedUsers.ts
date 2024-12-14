import { faker } from '@faker-js/faker/.';
import { PrismaClient } from '@prisma/client';
// Initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // generate users to seed
  const users = []; //Randomize 10 users and put them in an array
  for (let i = 0; i < 10; i++) {
    const user = await prisma.user.create({
      data: {
        fullName: faker.person.fullName(),
        email: faker.internet.email(),
        username: faker.internet.username(),
        password: faker.internet.password(), // Consider hashing passwords in a real-world app
      },
    });
    users.push(user);
  }

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
