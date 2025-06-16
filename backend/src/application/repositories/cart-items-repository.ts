import { CartItem } from '@/application/types/cart-item';

export abstract class CartItemsRepository {
  abstract listAll(): Promise<CartItem[]>;
  abstract addItem(item: Omit<CartItem, 'id'>): null;
  abstract updateAmount(id: string, amount: number): null;
  abstract removeItem(id: string): null;
}
