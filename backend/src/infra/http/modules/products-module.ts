import { ListProductsQuery } from '@/application/queries/products/list-products';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { ListProductsController } from '../controllers/products/list-products.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ListProductsController],
  providers: [ListProductsQuery],
})
export class ProductsModule {}
