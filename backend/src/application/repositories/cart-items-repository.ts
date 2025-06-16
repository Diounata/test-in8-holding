import { CartItem } from '@/application/types/cart-item';

export abstract class CartItemsRepository {
  abstract listAll(): Promise<CartItem[]>;
  abstract addItem(item: Omit<CartItem, 'id'>): Promise<null>;
  abstract updateAmount(id: string, amount: number): Promise<null>;
  abstract removeItem(id: string): Promise<null>;
}
