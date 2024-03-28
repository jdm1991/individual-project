/*
  Warnings:

  - You are about to drop the column `formatted_price` on the `Cars` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cars" DROP COLUMN "formatted_price";

-- CreateTable
CREATE TABLE "Accessories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,

    CONSTRAINT "Accessories_pkey" PRIMARY KEY ("id")
);
