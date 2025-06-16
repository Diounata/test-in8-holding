import { CartItemsRepository } from '@/application/repositories/cart-items-repository';
import { OrdersRepository } from '@/application/repositories/orders-repository';
import { ProductsRepository } from '@/application/repositories/products-repository';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaCartItemsRepository } from './prisma/repositories/prisma-cart-items-repository';
import { PrismaOrdersRepository } from './prisma/repositories/prisma-orders-repository';
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
    {
      provide: OrdersRepository,
      useClass: PrismaOrdersRepository,
    },
  ],
  exports: [
    PrismaService,
    ProductsRepository,
    CartItemsRepository,
    OrdersRepository,
  ],
})
export class DatabaseModule {}
