-- AlterTable
ALTER TABLE "Cars" ADD COLUMN     "formatted_price" TEXT NOT NULL DEFAULT concat('£', to_char(price, '999,999')),
ALTER TABLE "Cars" ADD COLUMN "identifier" TEXT;
