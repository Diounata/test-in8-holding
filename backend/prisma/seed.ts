import { seedBrazilianProviderProducts } from './seeds/seed-brazilian-provider-products';
import { seedEuropeanProviderProducts } from './seeds/seed-european-provider-products';

async function seed() {
  await seedBrazilianProviderProducts();
  await seedEuropeanProviderProducts();
}

seed();
