/*
  Warnings:

  - A unique constraint covering the columns `[userClerkId]` on the table `UserToken` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserToken_userClerkId_key" ON "UserToken"("userClerkId");
