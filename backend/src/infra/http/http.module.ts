import { Module } from '@nestjs/common';
import { CartItemsModule } from './modules/cart-items-module';
import { ProductsModule } from './modules/products-module';

@Module({
  imports: [ProductsModule, CartItemsModule],
})
export class HttpModule {}
