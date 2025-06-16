import {
  PaginationInput,
  PaginationOutput,
} from '@/application/database/pagination-data';
import { CartItemsRepository } from '@/application/repositories/cart-items-repository';
import { CartItem } from '@/application/types/cart-item';
import { Either, right } from '@/core/either';
import { QueryError } from '@/core/errors/query-error';
import { Injectable } from '@nestjs/common';

type Input = {
  pagination: PaginationInput;
};

type Output = Either<QueryError, PaginationOutput<CartItem>>;

@Injectable()
export class ListCartItemsQuery {
  constructor(private cartItemsRepository: CartItemsRepository) {}

  async handle(input: Input): Promise<Output> {
    const cartItemsLength = await this.cartItemsRepository.getLength();
    const cartItems = await this.cartItemsRepository.listAll(input.pagination);

    return right({
      items: cartItems,
      totalItems: cartItemsLength,
      page: input.pagination.page,
      itemsPerPage: input.pagination.itemsPerPage,
      totalPages: Math.ceil(cartItemsLength / input.pagination.itemsPerPage),
    });
  }
}
