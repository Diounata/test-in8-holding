import { PrismaClient, Product } from '@prisma/client';

type EuropeanProviderProductsResponse = Array<{
  hasDiscount: boolean;
  name: string;
  gallery: string[];
  description: string;
  price: string;
  discountValue: string;
  details: { adjective: string; material: string };
  id: string;
}>;

export async function seedEuropeanProviderProducts() {
  const prismaClient = new PrismaClient();
  const response = await fetch(
    'https://616d6bdb6dacbb001794ca17.mockapi.io/devnology/european_provider',
  );
  const data: EuropeanProviderProductsResponse = await response.json();

  const products: Omit<Product, 'id'>[] = data.map((item) => ({
    name: item.name,
    description: item.description,
    image: item.gallery?.[0] ?? null,
    category: item.details.adjective,
    material: item.details.material,
    price: item.price,
    discountPrice: item.discountValue,
  }));

  await prismaClient.product.createMany({
    data: products,
    skipDuplicates: true,
  });

  await prismaClient.$disconnect();
}
