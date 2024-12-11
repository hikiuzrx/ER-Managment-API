/*
  Warnings:

  - The values [Sliver] on the enum `PartnerCategory` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PartnerCategory_new" AS ENUM ('Gold', 'Silver', 'Bronze');
ALTER TABLE "Partner" ALTER COLUMN "category" TYPE "PartnerCategory_new" USING ("category"::text::"PartnerCategory_new");
ALTER TYPE "PartnerCategory" RENAME TO "PartnerCategory_old";
ALTER TYPE "PartnerCategory_new" RENAME TO "PartnerCategory";
DROP TYPE "PartnerCategory_old";
COMMIT;
