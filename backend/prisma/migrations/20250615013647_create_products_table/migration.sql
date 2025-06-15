-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,
    "category" TEXT NOT NULL,
    "material" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "discountPrice" TEXT,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
