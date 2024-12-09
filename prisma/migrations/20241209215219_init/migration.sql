-- CreateEnum
CREATE TYPE "communicationState" AS ENUM ('pending', 'accepted', 'rejected');

-- CreateEnum
CREATE TYPE "PartnerCategory" AS ENUM ('Gold', 'Sliver', 'Bronze');

-- CreateEnum
CREATE TYPE "Ptype" AS ENUM ('guest', 'sponsor', 'media');

-- CreateEnum
CREATE TYPE "ContributionType" AS ENUM ('Finance_Contribution', 'IT_Services', 'Event_Location_Provider', 'TV_Coverage', 'Media_Partner', 'Radio_Interview');

-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Event" (
    "eventId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "description" TEXT,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("eventId")
);

-- CreateTable
CREATE TABLE "Partner" (
    "partnerId" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "category" "PartnerCategory" NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,

    CONSTRAINT "Partner_pkey" PRIMARY KEY ("partnerId")
);

-- CreateTable
CREATE TABLE "Contribution" (
    "contributorId" INTEGER NOT NULL,
    "comState" "communicationState" NOT NULL,
    "contributionType" "ContributionType" NOT NULL,
    "content" TEXT NOT NULL,
    "eventId" INTEGER NOT NULL,

    CONSTRAINT "Contribution_pkey" PRIMARY KEY ("contributorId","eventId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Event_name_key" ON "Event"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Event_date_key" ON "Event"("date");

-- CreateIndex
CREATE UNIQUE INDEX "Partner_email_key" ON "Partner"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Partner_phoneNumber_key" ON "Partner"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Partner_fullName_key" ON "Partner"("fullName");

-- AddForeignKey
ALTER TABLE "Contribution" ADD CONSTRAINT "Contribution_contributorId_fkey" FOREIGN KEY ("contributorId") REFERENCES "Partner"("partnerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contribution" ADD CONSTRAINT "Contribution_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("eventId") ON DELETE RESTRICT ON UPDATE CASCADE;
