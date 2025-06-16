import { ListCartItemsQuery } from '@/application/queries/cart-items/list-cart-items';
import { AddCartItemUseCase } from '@/application/use-cases/cart-items/add-cart-item';
import { UpdateCartItemAmountUseCase } from '@/application/use-cases/cart-items/update-cart-item-amount';
import { DatabaseModule } from '@/infra/database/database.module';
import { AddCartItemController } from '@/infra/http/controllers/cart-items/add-cart-item.controller';
import { ListCartItemsController } from '@/infra/http/controllers/cart-items/list-cart-items.controller';
import { UpdateCartItemAmountController } from '@/infra/http/controllers/cart-items/update-cart-item-amount.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  controllers: [
    AddCartItemController,
    ListCartItemsController,
    UpdateCartItemAmountController,
  ],
  providers: [
    AddCartItemUseCase,
    ListCartItemsQuery,
    UpdateCartItemAmountUseCase,
  ],
})
export class CartItemsModule {}
