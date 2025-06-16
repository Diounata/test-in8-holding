import { CartItemsRepository } from '@/application/repositories/cart-items-repository';
import { OrdersRepository } from '@/application/repositories/orders-repository';
import { UseCase } from '@/application/use-cases/use-case';
import { Injectable } from '@nestjs/common';
import { Either, left, right } from 'src/core/either';
import { UseCaseError } from 'src/core/errors/use-case-error';
import { EmptyCartError } from '../cart-items/errors/empty-cart-error';

export interface Input {
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

export type Output = Either<UseCaseError, void>;

@Injectable()
export class FinishOrderUseCase implements UseCase {
  constructor(
    private ordersRepository: OrdersRepository,
    private cartItemsRepository: CartItemsRepository,
  ) {}

  async handle({
    email,
    phone,
    address,
    city,
    state,
    zipCode,
  }: Input): Promise<Output> {
    const cartItemsLength = await this.cartItemsRepository.getLength();
    if (cartItemsLength === 0) return left(new EmptyCartError());

    const totalPrice = await this.cartItemsRepository.calculateTotalPrice();
    await this.ordersRepository.finish({
      email,
      phone,
      address,
      city,
      state,
      zipCode,
      totalPrice: String(totalPrice),
    });
    await this.cartItemsRepository.cleanItems();
    return right(null);
  }
}
