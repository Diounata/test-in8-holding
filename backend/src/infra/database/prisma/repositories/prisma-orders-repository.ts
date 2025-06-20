import { PaginationInput } from '@/application/database/pagination-data';
import { OrdersRepository } from '@/application/repositories/orders-repository';
import { Order } from '@/application/types/order';
import { PrismaService } from '@/infra/database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaOrdersRepository implements OrdersRepository {
  constructor(private prisma: PrismaService) {}

  async listAll(pagination: PaginationInput): Promise<Order[]> {
    const { page = 1, itemsPerPage = 10 } = pagination;
    const skip = (page - 1) * itemsPerPage;
    const orders = await this.prisma.order.findMany({
      skip,
      take: itemsPerPage,
      orderBy: {
        createdAt: 'desc',
      },
    });
    return orders.map((order) => ({
      ...order,
      createdAt: order.createdAt.toISOString(),
    }));
  }

  async finish(order: Order): Promise<void> {
    await this.prisma.order.create({
      data: order,
    });
  }

  async getLength(): Promise<number> {
    return await this.prisma.order.count();
  }
}
