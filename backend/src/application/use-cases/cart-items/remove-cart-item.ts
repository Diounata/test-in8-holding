import { CartItemsRepository } from '@/application/repositories/cart-items-repository';
import { UseCase } from '@/application/use-cases/use-case';
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error';
import { Injectable } from '@nestjs/common';
import { Either, left, right } from 'src/core/either';
import { UseCaseError } from 'src/core/errors/use-case-error';

export interface Input {
  cartItemId: string;
}

export type Output = Either<UseCaseError, void>;

@Injectable()
export class RemoveCartItemUseCase implements UseCase {
  constructor(private cartItemsRepository: CartItemsRepository) {}

  async handle(input: Input): Promise<Output> {
    const doesCartItemExist = await this.cartItemsRepository.findCartItemById(
      input.cartItemId,
    );
    if (!doesCartItemExist) return left(new ResourceNotFoundError());
    await this.cartItemsRepository.removeItem(input.cartItemId);
    return right(null);
  }
}
