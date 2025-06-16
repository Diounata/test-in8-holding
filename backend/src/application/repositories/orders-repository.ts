import { Order } from '@/application/types/order';
import { PaginationInput } from '../database/pagination-data';

export abstract class OrdersRepository {
  abstract listAll(pagination: PaginationInput): Promise<Order[]>;
  abstract finish(order: Omit<Order, 'id' | 'createdAt'>): Promise<void>;
  abstract getLength(): Promise<number>;
}
