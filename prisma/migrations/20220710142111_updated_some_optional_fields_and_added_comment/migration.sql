/*
  Warnings:

  - Added the required column `likes` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shares` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `views` to the `Listing` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Listing" ADD COLUMN     "likes" INTEGER NOT NULL,
ADD COLUMN     "shares" INTEGER NOT NULL,
ADD COLUMN     "views" INTEGER NOT NULL,
ALTER COLUMN "originalUrl" DROP NOT NULL,
ALTER COLUMN "originalUUID" DROP NOT NULL,
ALTER COLUMN "originalDate" DROP NOT NULL,
ALTER COLUMN "isOriginalAds" DROP NOT NULL,
ALTER COLUMN "stickyExpiration" DROP NOT NULL,
ALTER COLUMN "authorName" DROP NOT NULL,
ALTER COLUMN "authorUUID" DROP NOT NULL,
ALTER COLUMN "contactPhone" DROP NOT NULL;

-- AlterTable
ALTER TABLE "News" ALTER COLUMN "originalUrl" DROP NOT NULL,
ALTER COLUMN "originalUUID" DROP NOT NULL,
ALTER COLUMN "originalDate" DROP NOT NULL,
ALTER COLUMN "source" DROP NOT NULL,
ALTER COLUMN "fetchDate" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "body" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "likes" INTEGER NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
