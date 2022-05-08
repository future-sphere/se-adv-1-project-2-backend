/*
  Warnings:

  - Added the required column `location` to the `TrialReservation` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Location" AS ENUM ('ONLINE', 'FLUSHING');

-- AlterTable
ALTER TABLE "TrialReservation" ADD COLUMN     "location" "Location" NOT NULL;
