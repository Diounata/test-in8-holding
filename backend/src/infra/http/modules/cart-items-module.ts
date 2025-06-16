import { AddCartItemUseCase } from '@/application/use-cases/cart-items/add-cart-item';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { AddCartItemController } from '../controllers/cart-items/add-cart-item.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AddCartItemController],
  providers: [AddCartItemUseCase],
})
export class CartItemsModule {}
