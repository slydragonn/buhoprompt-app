/*
  Warnings:

  - You are about to drop the column `chatHistory` on the `Prompt` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `Prompt` table. All the data in the column will be lost.
  - You are about to drop the column `prevContent` on the `Prompt` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Prompt" DROP COLUMN "chatHistory",
DROP COLUMN "model",
DROP COLUMN "prevContent";
