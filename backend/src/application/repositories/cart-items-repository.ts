import { CartItem } from '@/application/types/cart-item';
import { Product } from '@/application/types/product';
import { PaginationInput } from '../database/pagination-data';

export abstract class CartItemsRepository {
  abstract listAll(
    pagination: PaginationInput,
  ): Promise<Array<CartItem & { product: Product }>>;
  abstract addItem(item: Omit<CartItem, 'id'>): Promise<null>;
  abstract updateAmount(id: string, amount: number): Promise<null>;
  abstract removeItem(id: string): Promise<null>;
  abstract findCartItemById(id: string): Promise<CartItem | null>;
  abstract getLength(): Promise<number>;
}
