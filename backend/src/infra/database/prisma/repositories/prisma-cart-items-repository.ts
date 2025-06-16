import { CartItemsRepository } from '@/application/repositories/cart-items-repository';
import { CartItem } from '@/application/types/cart-item';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaCartItemsRepository implements CartItemsRepository {
  constructor(private prisma: PrismaService) {}

  async listAll(): Promise<CartItem[]> {
    return await this.prisma.cartItem.findMany({});
  }

  addItem(item: Omit<CartItem, 'id'>): null {
    const { productId, amount } = item;
    this.prisma.cartItem.create({
      data: {
        productId,
        amount,
      },
    });
    return null;
  }

  removeItem(id: string): null {
    this.prisma.cartItem.delete({
      where: {
        id,
      },
    });
    return null;
  }

  updateAmount(id: string, amount: number): null {
    this.prisma.cartItem.update({
      where: {
        id,
      },
      data: {
        amount,
      },
    });
    return null;
  }
}
