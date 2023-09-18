/*
  Warnings:

  - You are about to drop the `_ratingsTouserGames` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_reviewsTouserGames` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId,gameId,userGamesId]` on the table `ratings` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,gameId,userGamesId]` on the table `reviews` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userGamesId` to the `ratings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userGamesId` to the `reviews` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ratingsTouserGames" DROP CONSTRAINT "_ratingsTouserGames_A_fkey";

-- DropForeignKey
ALTER TABLE "_ratingsTouserGames" DROP CONSTRAINT "_ratingsTouserGames_B_fkey";

-- DropForeignKey
ALTER TABLE "_reviewsTouserGames" DROP CONSTRAINT "_reviewsTouserGames_A_fkey";

-- DropForeignKey
ALTER TABLE "_reviewsTouserGames" DROP CONSTRAINT "_reviewsTouserGames_B_fkey";

-- DropIndex
DROP INDEX "ratings_userId_gameId_key";

-- DropIndex
DROP INDEX "reviews_userId_gameId_key";

-- AlterTable
ALTER TABLE "ratings" ADD COLUMN     "userGamesId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "reviews" ADD COLUMN     "userGamesId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_ratingsTouserGames";

-- DropTable
DROP TABLE "_reviewsTouserGames";

-- CreateIndex
CREATE UNIQUE INDEX "ratings_userId_gameId_userGamesId_key" ON "ratings"("userId", "gameId", "userGamesId");

-- CreateIndex
CREATE UNIQUE INDEX "reviews_userId_gameId_userGamesId_key" ON "reviews"("userId", "gameId", "userGamesId");

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_userGamesId_fkey" FOREIGN KEY ("userGamesId") REFERENCES "userGames"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_userGamesId_fkey" FOREIGN KEY ("userGamesId") REFERENCES "userGames"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
