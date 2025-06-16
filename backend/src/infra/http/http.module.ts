import { Module } from '@nestjs/common';
import { CartItemsModule } from './modules/cart-items-module';
import { OrdersModule } from './modules/orders-module';
import { ProductsModule } from './modules/products-module';

@Module({
  imports: [ProductsModule, CartItemsModule, OrdersModule],
})
export class HttpModule {}
