import { CartItemsRepository } from '@/application/repositories/cart-items-repository';
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
export class UpdateCartItemAmountUseCase implements UseCase {
  constructor(private cartItemsRepository: CartItemsRepository) {}

  async handle(input: Input): Promise<Output> {
    const doesCartItemExist = await this.cartItemsRepository.findCartItemById(
      input.productId,
    );
    if (!doesCartItemExist) return left(new ResourceNotFoundError());
    await this.cartItemsRepository.updateAmount(input.productId, input.amount);
    return right(null);
  }
}
