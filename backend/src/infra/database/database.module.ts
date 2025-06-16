import { CartItemsRepository } from '@/application/repositories/cart-items-repository';
import { ProductsRepository } from '@/application/repositories/products-repository';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaCartItemsRepository } from './prisma/repositories/prisma-cart-items-repository';
import { PrismaProductsRepository } from './prisma/repositories/prisma-products-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: ProductsRepository,
      useClass: PrismaProductsRepository,
    },
    {
      provide: CartItemsRepository,
      useClass: PrismaCartItemsRepository,
    },
  ],
  exports: [PrismaService, ProductsRepository, CartItemsRepository],
})
export class DatabaseModule {}
