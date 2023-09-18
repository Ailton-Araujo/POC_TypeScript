-- DropForeignKey
ALTER TABLE "ratings" DROP CONSTRAINT "ratings_userGamesId_fkey";

-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_userGamesId_fkey";

-- AlterTable
ALTER TABLE "ratings" ALTER COLUMN "userGamesId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "reviews" ALTER COLUMN "userGamesId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_userGamesId_fkey" FOREIGN KEY ("userGamesId") REFERENCES "userGames"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_userGamesId_fkey" FOREIGN KEY ("userGamesId") REFERENCES "userGames"("id") ON DELETE SET NULL ON UPDATE CASCADE;
