import { GetProductQuery } from '@/application/queries/products/get-product-query';
import { ListProductsQuery } from '@/application/queries/products/list-products';
import { GetProductController } from '@/infra/http/controllers/products/get-product.controller';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { ListProductsController } from '../controllers/products/list-products.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ListProductsController, GetProductController],
  providers: [ListProductsQuery, GetProductQuery],
})
export class ProductsModule {}
