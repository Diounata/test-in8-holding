/*
  Warnings:

  - You are about to drop the column `productId` on the `cart_items` table. All the data in the column will be lost.
  - You are about to drop the column `discountPrice` on the `products` table. All the data in the column will be lost.
  - Added the required column `product_id` to the `cart_items` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "cart_items" DROP CONSTRAINT "cart_items_productId_fkey";

-- AlterTable
ALTER TABLE "cart_items" DROP COLUMN "productId",
ADD COLUMN     "product_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "discountPrice",
ADD COLUMN     "discount_price" TEXT;

-- CreateTable
CREATE TABLE "orders" (
    "id" TEXT NOT NULL,
    "total_price" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cart_items" ADD CONSTRAINT "cart_items_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
