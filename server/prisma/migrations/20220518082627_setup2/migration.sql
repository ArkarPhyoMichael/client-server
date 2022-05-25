/*
  Warnings:

  - Added the required column `categoryId` to the `Gallery` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Gallery` ADD COLUMN `categoryId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Gallery` ADD CONSTRAINT `Gallery_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
