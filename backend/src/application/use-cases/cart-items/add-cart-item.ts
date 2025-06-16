import { CartItemsRepository } from '@/application/repositories/cart-items-repository';
import { ProductsRepository } from '@/application/repositories/products-repository';
import { UseCase } from '@/application/use-cases/use-case';
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error';
import { Injectable } from '@nestjs/common';
import { Either, left, right } from 'src/core/either';
import { UseCaseError } from 'src/core/errors/use-case-error';

export interface Input {
  productId: string;
  amount: number;
}

export type Output = Either<UseCaseError, void>;

@Injectable()
export class AddCartItemUseCase implements UseCase {
  constructor(
    private cartItemsRepository: CartItemsRepository,
    private productsRepository: ProductsRepository,
  ) {}

  async handle(input: Input): Promise<Output> {
    const doesProductExist = await this.productsRepository.findProductById(
      input.productId,
    );
    if (!doesProductExist) return left(new ResourceNotFoundError());
    await this.cartItemsRepository.addItem(input);
    return right(null);
  }
}
