-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "isPortal" BOOLEAN DEFAULT false,
ADD COLUMN     "isPublic" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "isPortal" BOOLEAN DEFAULT false,
ADD COLUMN     "isPublic" BOOLEAN DEFAULT false;
