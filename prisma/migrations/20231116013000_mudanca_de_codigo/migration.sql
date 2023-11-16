/*
  Warnings:

  - Added the required column `category_id` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `place_id` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "categories" DROP CONSTRAINT "categories_name_fkey";

-- DropForeignKey
ALTER TABLE "places" DROP CONSTRAINT "places_name_fkey";

-- AlterTable
ALTER TABLE "events" ADD COLUMN     "category_id" TEXT NOT NULL,
ADD COLUMN     "place_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_place_id_fkey" FOREIGN KEY ("place_id") REFERENCES "places"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
