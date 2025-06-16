import { Order } from '@/application/types/order';
import { PaginationInput } from '../database/pagination-data';

export abstract class OrdersRepository {
  abstract listAll(pagination: PaginationInput): Promise<Order[]>;
  abstract create(order: Order): Promise<void>;
  abstract getLength(): Promise<number>;
}
