/*
  Warnings:

  - You are about to drop the column `userGamesId` on the `ratings` table. All the data in the column will be lost.
  - You are about to drop the column `userGamesId` on the `reviews` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ratings" DROP CONSTRAINT "ratings_userGamesId_fkey";

-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_userGamesId_fkey";

-- AlterTable
ALTER TABLE "ratings" DROP COLUMN "userGamesId";

-- AlterTable
ALTER TABLE "reviews" DROP COLUMN "userGamesId";

-- CreateTable
CREATE TABLE "_reviewsTouserGames" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ratingsTouserGames" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_reviewsTouserGames_AB_unique" ON "_reviewsTouserGames"("A", "B");

-- CreateIndex
CREATE INDEX "_reviewsTouserGames_B_index" ON "_reviewsTouserGames"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ratingsTouserGames_AB_unique" ON "_ratingsTouserGames"("A", "B");

-- CreateIndex
CREATE INDEX "_ratingsTouserGames_B_index" ON "_ratingsTouserGames"("B");

-- AddForeignKey
ALTER TABLE "_reviewsTouserGames" ADD CONSTRAINT "_reviewsTouserGames_A_fkey" FOREIGN KEY ("A") REFERENCES "reviews"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_reviewsTouserGames" ADD CONSTRAINT "_reviewsTouserGames_B_fkey" FOREIGN KEY ("B") REFERENCES "userGames"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ratingsTouserGames" ADD CONSTRAINT "_ratingsTouserGames_A_fkey" FOREIGN KEY ("A") REFERENCES "ratings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ratingsTouserGames" ADD CONSTRAINT "_ratingsTouserGames_B_fkey" FOREIGN KEY ("B") REFERENCES "userGames"("id") ON DELETE CASCADE ON UPDATE CASCADE;
