import { ListProductsQuery } from '@/application/queries/products/list-products';
import { Controller, Get, Query } from '@nestjs/common';
import { z } from 'zod';
import { ZodValidationPipe } from '../../pipes/zod-validation.pipe';

export const listProductsQuerySchema = z.object({
  page: z.coerce.number().min(1).optional(),
  itemsPerPage: z.coerce.number().min(1).optional(),
  query: z.string().optional(),
});

type ListProductsQuerySchema = z.infer<typeof listProductsQuerySchema>;

@Controller('products')
export class ListProductsController {
  constructor(private listProductsQuery: ListProductsQuery) {}

  @Get('')
  async handle(
    @Query(new ZodValidationPipe(listProductsQuerySchema))
    query: ListProductsQuerySchema,
  ) {
    const result = await this.listProductsQuery.handle({
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
