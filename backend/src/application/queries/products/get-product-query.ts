import { ProductsRepository } from '@/application/repositories/products-repository';
import { Product } from '@/application/types/product';
import { Either, left, right } from '@/core/either';
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error';
import { QueryError } from '@/core/errors/query-error';
import { Injectable } from '@nestjs/common';

type Input = {
  id: string;
};

type Output = Either<QueryError, Product>;

@Injectable()
export class GetProductQuery {
  constructor(private productsRepository: ProductsRepository) {}

  async handle(input: Input): Promise<Output> {
    const product = await this.productsRepository.findProductById(input.id);
    if (!product) return left(new ResourceNotFoundError());
    return right(product);
  }
}
