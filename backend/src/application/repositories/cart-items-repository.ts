import { CartItem } from '@/application/types/cart-item';
import { Product } from '@/application/types/product';
import { PaginationInput } from '../database/pagination-data';

export abstract class CartItemsRepository {
  abstract listAll(
    pagination: PaginationInput,
  ): Promise<Array<CartItem & { product: Product }>>;
  abstract addItem(item: Omit<CartItem, 'id'>): Promise<void>;
  abstract updateAmount(id: string, amount: number): Promise<void>;
  abstract removeItem(id: string): Promise<void>;
  abstract cleanItems(): Promise<void>;
  abstract findCartItemById(id: string): Promise<CartItem | void>;
  abstract getLength(): Promise<number>;
}
