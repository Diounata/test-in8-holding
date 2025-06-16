import { FinishOrderUseCase } from '@/application/use-cases/orders/finish-order';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { FinishOrderController } from '../controllers/orders/finish-order.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [FinishOrderController],
  providers: [FinishOrderUseCase],
})
export class OrdersModule {}
