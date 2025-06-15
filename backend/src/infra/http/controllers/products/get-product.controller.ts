import { GetProductQuery } from '@/application/queries/products/get-product-query';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('products')
export class GetProductController {
  constructor(private getProductQuery: GetProductQuery) {}

  @Get(':id')
  async handle(@Param('id') id: string) {
    const result = await this.getProductQuery.handle({
      id,
    });
    const { value } = result;
    return value;
  }
}
