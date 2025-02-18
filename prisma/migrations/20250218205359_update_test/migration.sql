/*
  Warnings:

  - You are about to drop the column `coverImagemUrl` on the `Restaurant` table. All the data in the column will be lost.
  - Added the required column `coverImageUrl` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Restaurant" DROP COLUMN "coverImagemUrl",
ADD COLUMN     "coverImageUrl" TEXT NOT NULL;
