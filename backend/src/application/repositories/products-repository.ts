import { PaginationInput } from '@/application/database/pagination-data';
import { Product } from '@/application/types/product';

export abstract class ProductsRepository {
  abstract listAll(pagination: PaginationInput): Promise<Product[]>;
  abstract findProductById(id: string): Promise<Product | null>;
  abstract getLength(): Promise<number>;
}
