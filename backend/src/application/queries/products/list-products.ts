import {
  PaginationInput,
  PaginationOutput,
} from '@/application/database/pagination-data';
import { ProductsRepository } from '@/application/repositories/products-repository';
import { Product } from '@/application/types/product';
import { Either, right } from '@/core/either';
import { QueryError } from '@/core/errors/query-error';
import { Injectable } from '@nestjs/common';

type Input = {
  pagination: PaginationInput;
};

type Output = Either<QueryError, PaginationOutput<Product>>;

@Injectable()
export class ListProductsQuery {
  constructor(private productsRepository: ProductsRepository) {}

  async handle(input: Input): Promise<Output> {
    const products = await this.productsRepository.listAll(input.pagination);
    const productsLength = await this.productsRepository.getLength(
      input.pagination,
    );

    return right({
      items: products,
      totalItems: productsLength,
      page: input.pagination.page,
      itemsPerPage: input.pagination.itemsPerPage,
      totalPages: Math.ceil(productsLength / input.pagination.itemsPerPage),
    });
  }
}
