/*
  Warnings:

  - A unique constraint covering the columns `[userId,gameId]` on the table `ratings` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,gameId]` on the table `reviews` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "ratings" DROP CONSTRAINT "ratings_userGamesId_fkey";

-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_userGamesId_fkey";

-- DropIndex
DROP INDEX "ratings_userId_gameId_userGamesId_key";

-- DropIndex
DROP INDEX "reviews_userId_gameId_userGamesId_key";

-- AlterTable
ALTER TABLE "ratings" ALTER COLUMN "userGamesId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "reviews" ALTER COLUMN "userGamesId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ratings_userId_gameId_key" ON "ratings"("userId", "gameId");

-- CreateIndex
CREATE UNIQUE INDEX "reviews_userId_gameId_key" ON "reviews"("userId", "gameId");

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_userGamesId_fkey" FOREIGN KEY ("userGamesId") REFERENCES "userGames"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_userGamesId_fkey" FOREIGN KEY ("userGamesId") REFERENCES "userGames"("id") ON DELETE SET NULL ON UPDATE CASCADE;
