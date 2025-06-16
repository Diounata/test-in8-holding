import { ListOrdersQuery } from '@/application/queries/orders/list-orders';
import { FinishOrderUseCase } from '@/application/use-cases/orders/finish-order';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { FinishOrderController } from '../controllers/orders/finish-order.controller';
import { ListOrdersController } from '../controllers/orders/list-orders.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [FinishOrderController, ListOrdersController],
  providers: [FinishOrderUseCase, ListOrdersQuery],
})
export class OrdersModule {}
