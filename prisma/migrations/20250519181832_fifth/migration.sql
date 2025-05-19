/*
  Warnings:

  - You are about to drop the column `isOfficial` on the `Template` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `Template` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Template_isOfficial_createdAt_idx";

-- AlterTable
ALTER TABLE "Template" DROP COLUMN "isOfficial",
DROP COLUMN "model",
ADD COLUMN     "base" TEXT;

-- CreateIndex
CREATE INDEX "Template_createdAt_idx" ON "Template"("createdAt" DESC);
