import { UpdateCartItemAmountUseCase } from '@/application/use-cases/cart-items/update-cart-item-amount';
import { Body, Controller, HttpException, Param, Patch } from '@nestjs/common';
import { z } from 'zod';
import { ZodValidationPipe } from '../../pipes/zod-validation.pipe';

const updateCartItemAmountSchema = z.object({
  amount: z.number().int().positive(),
});

type UpdateCartItemAmountSchema = z.infer<typeof updateCartItemAmountSchema>;

@Controller('cart-items')
export class UpdateCartItemAmountController {
  constructor(
    private updateCartItemAmountUseCase: UpdateCartItemAmountUseCase,
  ) {}

  @Patch('/amount/:productId')
  async handle(
    @Body(new ZodValidationPipe(updateCartItemAmountSchema))
    { amount }: UpdateCartItemAmountSchema,
    @Param('productId') productId: string,
  ) {
    const result = await this.updateCartItemAmountUseCase.handle({
      productId,
      amount,
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
