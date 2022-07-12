/*
  Warnings:

  - Added the required column `category` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subCategory` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `category` on the `News` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "NewsCategory" AS ENUM ('speedy', 'china', 'entertainment');

-- CreateEnum
CREATE TYPE "ListingCategory" AS ENUM ('rental', 'realty', 'travel', 'hiring', 'community', 'buyAndSell', 'professional', 'training');

-- CreateEnum
CREATE TYPE "ListingSubCategory" AS ENUM ('queens', 'elmhurst', 'flushing', 'brooklyn', 'manhattan', 'longIslandNewJerseyOrOthers', 'commercialProperty', 'residencialProperty', 'inspection', 'travelAgency', 'carpool', 'taxi', 'dating', 'daycare', 'church', 'messageHiring', 'communityOthers', 'nailsHiring', 'restaurantsHiring', 'otherHiring', 'applyingForJobs', 'salesHiring', 'internetHiring', 'secondHandTrading', 'phoneTrading', 'carTrading', 'computerTrading', 'otherTrading', 'decorationProfessional', 'hvacProfessional', 'movingProfessional', 'securityCameraProfessional', 'lawyers', 'accountants', 'insuranceProfessional', 'financeProfessional', 'citizenshipProfessional', 'realtyProfessional', 'studentVisaProfessional', 'translationProfessional', 'computerRepairProfessional', 'webDesignProfessional', 'printingProfessional', 'spaProfessional', 'massageProfessional', 'healthProfessional', 'drivingSchool', 'photographer', 'shippingProfessional', 'tradeSchool', 'prepSchool', 'other', 'zuzuwang');

-- AlterTable
ALTER TABLE "Listing" ADD COLUMN     "category" "ListingCategory" NOT NULL,
ADD COLUMN     "subCategory" "ListingSubCategory" NOT NULL;

-- AlterTable
ALTER TABLE "News" DROP COLUMN "category",
ADD COLUMN     "category" "NewsCategory" NOT NULL;
