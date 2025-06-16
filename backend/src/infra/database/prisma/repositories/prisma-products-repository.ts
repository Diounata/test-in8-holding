import { PaginationInput } from '@/application/database/pagination-data';
import { ProductsRepository } from '@/application/repositories/products-repository';
import { Product } from '@/application/types/product';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaProductsRepository implements ProductsRepository {
  constructor(private prisma: PrismaService) {}

  async listAll(pagination: PaginationInput): Promise<Product[]> {
    const { page = 1, query, itemsPerPage = 10 } = pagination;
    const skip = (page - 1) * itemsPerPage;

    let where = {};
    if (query) {
      const [key, value] = query.split('=');
      if (key && value !== undefined) {
        where = { [key]: { contains: value, mode: 'insensitive' } };
      }
    }

    return await this.prisma.product.findMany({
      skip,
      take: itemsPerPage,
      where,
    });
  }

  async getLength(pagination?: PaginationInput): Promise<number> {
    const { query } = pagination;

    let where = {};
    if (query) {
      const [key, value] = query.split('=');
      if (key && value !== undefined) {
        where = { [key]: { contains: value, mode: 'insensitive' } };
      }
    }

    return await this.prisma.product.count({ where });
  }

  async findProductById(id: string): Promise<Product | null> {
    return await this.prisma.product.findUnique({ where: { id } });
  }
}
