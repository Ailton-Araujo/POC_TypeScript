/*
  Warnings:

  - You are about to drop the column `launchYear` on the `games` table. All the data in the column will be lost.
  - Added the required column `launchDate` to the `games` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "games" DROP COLUMN "launchYear",
ADD COLUMN     "launchDate" DATE NOT NULL;
