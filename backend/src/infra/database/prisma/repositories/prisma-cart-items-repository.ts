import { PaginationInput } from '@/application/database/pagination-data';
import { CartItemsRepository } from '@/application/repositories/cart-items-repository';
import { CartItem } from '@/application/types/cart-item';
import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaCartItemsRepository implements CartItemsRepository {
  constructor(private prisma: PrismaService) {}

  async listAll(
    pagination: PaginationInput,
  ): Promise<Array<CartItem & { product: Product }>> {
    const { page = 1, itemsPerPage = 10 } = pagination;
    const skip = (page - 1) * itemsPerPage;
    return await this.prisma.cartItem.findMany({
      skip,
      take: itemsPerPage,
      include: {
        product: true,
      },
    });
  }

  async addItem(item: Omit<CartItem, 'id'>): Promise<void> {
    const { productId, amount } = item;
    await this.prisma.cartItem.create({
      data: {
        productId,
        amount,
      },
    });
  }

  async removeItem(id: string): Promise<void> {
    await this.prisma.cartItem.delete({
      where: {
        id,
      },
    });
  }

  async cleanItems(): Promise<void> {
    await this.prisma.cartItem.deleteMany();
  }

  async updateAmount(id: string, amount: number): Promise<void> {
    await this.prisma.cartItem.update({
      where: {
        id,
      },
      data: {
        amount,
      },
    });
  }

  async findCartItemById(id: string): Promise<CartItem | null> {
    return await this.prisma.cartItem.findUnique({ where: { id } });
  }

  async getLength(): Promise<number> {
    return await this.prisma.cartItem.count();
  }
}
