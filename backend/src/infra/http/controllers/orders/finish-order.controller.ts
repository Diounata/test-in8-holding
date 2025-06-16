import { FinishOrderUseCase } from '@/application/use-cases/orders/finish-order';
import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { z } from 'zod';
import { ZodValidationPipe } from '../../pipes/zod-validation.pipe';

const finishOrderSchema = z.object({
  email: z.string().email(),
  phone: z.string().length(11),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string().length(8),
});

type FinishOrderSchema = z.infer<typeof finishOrderSchema>;

@Controller('orders')
export class FinishOrderController {
  constructor(private finishOrderUseCase: FinishOrderUseCase) {}

  @Post('/finish')
  async handle(
    @Body(new ZodValidationPipe(finishOrderSchema))
    { address, city, email, phone, state, zipCode }: FinishOrderSchema,
  ) {
    const result = await this.finishOrderUseCase.handle({
      address,
      city,
      email,
      phone,
      state,
      zipCode,
    });

    if (result.isLeft())
      throw new HttpException(
        {
          code: result.value.code,
          message: result.value.message,
        },
        400,
      );
  }
}
