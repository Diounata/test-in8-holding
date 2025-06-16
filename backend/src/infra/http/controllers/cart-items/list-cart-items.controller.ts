import { ListCartItemsQuery } from '@/application/queries/cart-items/list-cart-items';
import { ZodValidationPipe } from '@/infra/http/pipes/zod-validation.pipe';
import { Controller, Get, Query } from '@nestjs/common';
import { z } from 'zod';

export const listCartItemsQuerySchema = z.object({
  page: z.coerce.number().min(1).optional(),
  itemsPerPage: z.coerce.number().min(1).optional(),
  query: z.string().optional(),
});

type ListCartItemsQuerySchema = z.infer<typeof listCartItemsQuerySchema>;

@Controller('cart-items')
export class ListCartItemsController {
  constructor(private listCartItemsQuery: ListCartItemsQuery) {}

  @Get('')
  async handle(
    @Query(new ZodValidationPipe(listCartItemsQuerySchema))
    query: ListCartItemsQuerySchema,
  ) {
    const result = await this.listCartItemsQuery.handle({
      pagination: {
        page: query.page ?? 1,
        itemsPerPage: query.itemsPerPage ?? 10,
        query: query.query,
      },
    });
    const { value } = result;
    return value;
  }
}
