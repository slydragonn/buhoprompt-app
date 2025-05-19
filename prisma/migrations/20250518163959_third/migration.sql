/*
  Warnings:

  - You are about to drop the column `content` on the `Prompt` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Prompt` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Template` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `UserToken` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[title,userClerkId]` on the table `Prompt` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title,userClerkId]` on the table `Template` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `improved` to the `Prompt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `initial` to the `Prompt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userClerkId` to the `Prompt` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Prompt` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `userClerkId` to the `Template` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Template` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `userClerkId` to the `UserToken` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Prompt" DROP CONSTRAINT "Prompt_userId_fkey";

-- DropForeignKey
ALTER TABLE "Template" DROP CONSTRAINT "Template_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserToken" DROP CONSTRAINT "UserToken_userId_fkey";

-- DropIndex
DROP INDEX "Prompt_title_userId_key";

-- DropIndex
DROP INDEX "Prompt_userId_idx";

-- DropIndex
DROP INDEX "Template_title_userId_key";

-- DropIndex
DROP INDEX "Template_userId_idx";

-- DropIndex
DROP INDEX "UserToken_userId_idx";

-- DropIndex
DROP INDEX "UserToken_userId_key";

-- AlterTable
ALTER TABLE "Prompt" DROP COLUMN "content",
DROP COLUMN "userId",
ADD COLUMN     "improved" TEXT NOT NULL,
ADD COLUMN     "initial" TEXT NOT NULL,
ADD COLUMN     "userClerkId" TEXT NOT NULL,
ALTER COLUMN "description" SET NOT NULL;

-- AlterTable
ALTER TABLE "Template" DROP COLUMN "userId",
ADD COLUMN     "userClerkId" TEXT NOT NULL,
ALTER COLUMN "description" SET NOT NULL;

-- AlterTable
ALTER TABLE "UserToken" DROP COLUMN "userId",
ADD COLUMN     "userClerkId" TEXT NOT NULL;

-- DropTable
DROP TABLE "User";

-- CreateIndex
CREATE UNIQUE INDEX "Prompt_title_userClerkId_key" ON "Prompt"("title", "userClerkId");

-- CreateIndex
CREATE UNIQUE INDEX "Template_title_userClerkId_key" ON "Template"("title", "userClerkId");

-- CreateIndex
CREATE INDEX "UserToken_userClerkId_idx" ON "UserToken"("userClerkId");
