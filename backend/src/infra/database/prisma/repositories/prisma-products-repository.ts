import { PaginationInput } from '@/application/database/pagination-data';
import { ProductsRepository } from '@/application/repositories/products-repository';
import { Product } from '@/application/types/product';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaProductsRepository implements ProductsRepository {
  constructor(private prisma: PrismaService) {}

  async listAll(pagination: PaginationInput): Promise<Product[]> {
    const { page = 1, itemsPerPage = 10 } = pagination;
    const skip = (page - 1) * itemsPerPage;
    return await this.prisma.product.findMany({
      skip,
      take: itemsPerPage,
    });
  }

  async getLength(): Promise<number> {
    return await this.prisma.product.count();
  }
}
