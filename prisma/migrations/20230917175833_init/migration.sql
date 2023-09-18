/*
  Warnings:

  - A unique constraint covering the columns `[userId,gameId,userGamesId]` on the table `ratings` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,gameId,userGamesId]` on the table `reviews` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ratings_userId_gameId_key";

-- DropIndex
DROP INDEX "reviews_userId_gameId_key";

-- CreateIndex
CREATE UNIQUE INDEX "ratings_userId_gameId_userGamesId_key" ON "ratings"("userId", "gameId", "userGamesId");

-- CreateIndex
CREATE UNIQUE INDEX "reviews_userId_gameId_userGamesId_key" ON "reviews"("userId", "gameId", "userGamesId");
