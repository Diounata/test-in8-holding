import { ListCartItemsQuery } from '@/application/queries/cart-items/list-cart-items';
import { AddCartItemUseCase } from '@/application/use-cases/cart-items/add-cart-item';
import { RemoveCartItemUseCase } from '@/application/use-cases/cart-items/remove-cart-item';
import { UpdateCartItemAmountUseCase } from '@/application/use-cases/cart-items/update-cart-item-amount';
import { DatabaseModule } from '@/infra/database/database.module';
import { AddCartItemController } from '@/infra/http/controllers/cart-items/add-cart-item.controller';
import { ListCartItemsController } from '@/infra/http/controllers/cart-items/list-cart-items.controller';
import { UpdateCartItemAmountController } from '@/infra/http/controllers/cart-items/update-cart-item-amount.controller';
import { Module } from '@nestjs/common';
import { RemoveCartItemController } from '../controllers/cart-items/update-cart-item-amount.controller copy';

@Module({
  imports: [DatabaseModule],
  controllers: [
    AddCartItemController,
    ListCartItemsController,
    UpdateCartItemAmountController,
    RemoveCartItemController,
  ],
  providers: [
    AddCartItemUseCase,
    ListCartItemsQuery,
    UpdateCartItemAmountUseCase,
    RemoveCartItemUseCase,
  ],
})
export class CartItemsModule {}
