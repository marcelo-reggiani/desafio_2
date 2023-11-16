/*
  Warnings:

  - You are about to drop the column `event_id` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `event_id` on the `places` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `categories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `places` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "categories" DROP CONSTRAINT "categories_event_id_fkey";

-- DropForeignKey
ALTER TABLE "places" DROP CONSTRAINT "places_event_id_fkey";

-- DropIndex
DROP INDEX "categories_event_id_key";

-- DropIndex
DROP INDEX "places_event_id_key";

-- AlterTable
ALTER TABLE "categories" DROP COLUMN "event_id";

-- AlterTable
ALTER TABLE "places" DROP COLUMN "event_id";

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "places_name_key" ON "places"("name");

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_name_fkey" FOREIGN KEY ("name") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "places" ADD CONSTRAINT "places_name_fkey" FOREIGN KEY ("name") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
