import { CartItemsRepository } from '@/application/repositories/cart-items-repository';
import { UseCase } from '@/application/use-cases/use-case';
import { Injectable } from '@nestjs/common';
import { Either, right } from 'src/core/either';
import { UseCaseError } from 'src/core/errors/use-case-error';

export type Output = Either<UseCaseError, void>;

@Injectable()
export class CleanCartItemsUseCase implements UseCase {
  constructor(private cartItemsRepository: CartItemsRepository) {}

  async handle(): Promise<Output> {
    await this.cartItemsRepository.cleanItems();
    return right(null);
  }
}
