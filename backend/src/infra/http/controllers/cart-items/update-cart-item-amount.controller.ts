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

  @Patch('/amount/:cartItemId')
  async handle(
    @Body(new ZodValidationPipe(updateCartItemAmountSchema))
    { amount }: UpdateCartItemAmountSchema,
    @Param('cartItemId') cartItemId: string,
  ) {
    const result = await this.updateCartItemAmountUseCase.handle({
      cartItemId,
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
