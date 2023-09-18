-- DropForeignKey
ALTER TABLE "ratings" DROP CONSTRAINT "ratings_userGamesId_fkey";

-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_userGamesId_fkey";

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_userGamesId_fkey" FOREIGN KEY ("userGamesId") REFERENCES "userGames"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_userGamesId_fkey" FOREIGN KEY ("userGamesId") REFERENCES "userGames"("id") ON DELETE CASCADE ON UPDATE CASCADE;
