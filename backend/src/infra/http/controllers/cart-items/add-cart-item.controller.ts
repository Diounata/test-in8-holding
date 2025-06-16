import { AddCartItemUseCase } from '@/application/use-cases/cart-items/add-cart-item';
import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { z } from 'zod';
import { ZodValidationPipe } from '../../pipes/zod-validation.pipe';

const addCartItemSchema = z.object({
  productId: z.string().uuid(),
  amount: z.number().int().positive(),
});

type AddCartItemSchema = z.infer<typeof addCartItemSchema>;

@Controller('cart-items')
export class AddCartItemController {
  constructor(private addCartItemUseCase: AddCartItemUseCase) {}

  @Post('')
  async handle(
    @Body(new ZodValidationPipe(addCartItemSchema))
    { productId, amount }: AddCartItemSchema,
  ) {
    const result = await this.addCartItemUseCase.handle({
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
