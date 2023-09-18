/*
  Warnings:

  - A unique constraint covering the columns `[userId,gameId,userGamesId]` on the table `ratings` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,gameId,userGamesId]` on the table `reviews` will be added. If there are existing duplicate values, this will fail.
  - Made the column `userGamesId` on table `ratings` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userGamesId` on table `reviews` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "ratings" DROP CONSTRAINT "ratings_userGamesId_fkey";

-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_userGamesId_fkey";

-- DropIndex
DROP INDEX "ratings_userId_gameId_key";

-- DropIndex
DROP INDEX "reviews_userId_gameId_key";

-- AlterTable
ALTER TABLE "ratings" ALTER COLUMN "userGamesId" SET NOT NULL;

-- AlterTable
ALTER TABLE "reviews" ALTER COLUMN "userGamesId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ratings_userId_gameId_userGamesId_key" ON "ratings"("userId", "gameId", "userGamesId");

-- CreateIndex
CREATE UNIQUE INDEX "reviews_userId_gameId_userGamesId_key" ON "reviews"("userId", "gameId", "userGamesId");

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_userGamesId_fkey" FOREIGN KEY ("userGamesId") REFERENCES "userGames"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_userGamesId_fkey" FOREIGN KEY ("userGamesId") REFERENCES "userGames"("id") ON DELETE CASCADE ON UPDATE CASCADE;
