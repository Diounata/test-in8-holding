import { UseCaseError } from '@/core/errors/use-case-error';

export class EmptyCartError extends Error implements UseCaseError {
  code: string;

  constructor() {
    super('You cannot finish an order with an empty cart.');
    this.code = 'empty-cart';
  }
}
