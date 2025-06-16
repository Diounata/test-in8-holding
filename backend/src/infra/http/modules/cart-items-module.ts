import { ListCartItemsQuery } from '@/application/queries/cart-items/list-cart-items';
import { AddCartItemUseCase } from '@/application/use-cases/cart-items/add-cart-item';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { AddCartItemController } from '../controllers/cart-items/add-cart-item.controller';
import { ListCartItemsController } from '../controllers/cart-items/list-cart-items.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AddCartItemController, ListCartItemsController],
  providers: [AddCartItemUseCase, ListCartItemsQuery],
})
export class CartItemsModule {}
