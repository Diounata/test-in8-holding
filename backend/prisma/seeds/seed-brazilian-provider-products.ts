import { PrismaClient, Product } from '@prisma/client';

type BrazilianProviderProductsResponse = Array<{
  nome: string;
  descricao: string;
  categoria: string;
  imagem: string;
  preco: string;
  material: string;
  departamento: string;
  id: string;
  name?: string;
}>;

export async function seedBrazilianProviderProducts() {
  const prismaClient = new PrismaClient();
  const response = await fetch(
    'https://616d6bdb6dacbb001794ca17.mockapi.io/devnology/brazilian_provider',
  );
  const data: BrazilianProviderProductsResponse = await response.json();

  const products: Omit<Product, 'id'>[] = data.map((item) => ({
    name: item.nome,
    description: item.descricao,
    image: item.imagem,
    category: item.categoria,
    material: item.material,
    price: item.preco,
    discountPrice: null,
  }));

  await prismaClient.product.createMany({
    data: products,
    skipDuplicates: true,
  });

  await prismaClient.$disconnect();
}
