import { ListOrdersQuery } from '@/application/queries/orders/list-orders';
import { Controller, Get, Query } from '@nestjs/common';
import { z } from 'zod';
import { ZodValidationPipe } from '../../pipes/zod-validation.pipe';

export const listOrdersQuerySchema = z.object({
  page: z.coerce.number().min(1).optional(),
  itemsPerPage: z.coerce.number().min(1).optional(),
  query: z.string().optional(),
});

type ListOrdersQuerySchema = z.infer<typeof listOrdersQuerySchema>;

@Controller('orders')
export class ListOrdersController {
  constructor(private listOrdersQuery: ListOrdersQuery) {}

  @Get('')
  async handle(
    @Query(new ZodValidationPipe(listOrdersQuerySchema))
    query: ListOrdersQuerySchema,
  ) {
    const result = await this.listOrdersQuery.handle({
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
