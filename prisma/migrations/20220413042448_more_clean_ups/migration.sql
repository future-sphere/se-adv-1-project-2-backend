/*
  Warnings:

  - The `channel` column on the `Lead` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `userId` on the `TrialReservation` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Channel" AS ENUM ('FS_WEBSITE', 'GOOGLE', 'FACEBOOK', 'WECHAT', 'FLYERS', 'REFERRAL', 'WALKIN');

-- DropForeignKey
ALTER TABLE "TrialReservation" DROP CONSTRAINT "TrialReservation_courseId_fkey";

-- DropForeignKey
ALTER TABLE "TrialReservation" DROP CONSTRAINT "TrialReservation_userId_fkey";

-- AlterTable
ALTER TABLE "Lead" ADD COLUMN     "age" INTEGER,
DROP COLUMN "channel",
ADD COLUMN     "channel" "Channel";

-- AlterTable
ALTER TABLE "TrialReservation" DROP COLUMN "userId",
ADD COLUMN     "leadId" INTEGER,
ALTER COLUMN "courseId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "TrialReservation" ADD CONSTRAINT "TrialReservation_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrialReservation" ADD CONSTRAINT "TrialReservation_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;
