import {
  PaginationInput,
  PaginationOutput,
} from '@/application/database/pagination-data';
import { OrdersRepository } from '@/application/repositories/orders-repository';
import { Order } from '@/application/types/order';
import { Either, right } from '@/core/either';
import { QueryError } from '@/core/errors/query-error';
import { Injectable } from '@nestjs/common';

type Input = {
  pagination: PaginationInput;
};

type Output = Either<QueryError, PaginationOutput<Order>>;

@Injectable()
export class ListOrdersQuery {
  constructor(private ordersRepository: OrdersRepository) {}

  async handle(input: Input): Promise<Output> {
    const ordersLength = await this.ordersRepository.getLength();
    const orders = await this.ordersRepository.listAll(input.pagination);

    return right({
      items: orders,
      totalItems: ordersLength,
      page: input.pagination.page,
      itemsPerPage: input.pagination.itemsPerPage,
      totalPages: Math.ceil(ordersLength / input.pagination.itemsPerPage),
    });
  }
}
