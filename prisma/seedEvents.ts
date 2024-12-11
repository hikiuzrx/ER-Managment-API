import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

// Initialize Prisma Client
const prisma = new PrismaClient();

async function seed() {
  const events = []; //Randomize 10 events and put them in an array
  for (let i = 0; i < 10; i++) {
    const event = await prisma.event.create({
      data: {
        name: faker.company.name(),
        date: faker.date.future(),
        description: faker.lorem.sentence(),
      },
    });
    events.push(event);
  }

  const partners = []; //Randomize 10 partners and put them in an array
  for (let i = 0; i < 10; i++) {
    const partner = await prisma.partner.create({
      data: {
        email: faker.internet.email(),
        location: faker.address.city(),
        category: faker.helpers.arrayElement(['Gold', 'Silver', 'Bronze']),
        phoneNumber: faker.phone.number(),
        fullName: faker.name.fullName(),
      },
    });
    partners.push(partner);
  }

  for (const event of events) {
    for (let j = 0; j < 5; j++) {
      await prisma.contribution.create({
        data: {
          contributorId: partners[j % partners.length].partnerId,
          comState: faker.helpers.arrayElement([
            'pending',
            'accepted',
            'rejected',
          ]),
          contributionType: faker.helpers.arrayElement([
            'Finance_Contribution',
            'IT_Services',
            'Event_Location_Provider',
            'TV_Coverage',
            'Media_Partner',
            'Radio_Interview',
          ]),
          content: faker.lorem.paragraph(),
          eventId: event.eventId,
        },
      });
    }
  }

  console.log('Database has been seeded!');
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
