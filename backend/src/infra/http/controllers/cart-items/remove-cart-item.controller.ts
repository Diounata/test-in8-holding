import { RemoveCartItemUseCase } from '@/application/use-cases/cart-items/remove-cart-item';
import { Controller, Delete, HttpException, Param } from '@nestjs/common';

@Controller('cart-items')
export class RemoveCartItemController {
  constructor(private removeCartItemUseCase: RemoveCartItemUseCase) {}

  @Delete('/:cartItemId')
  async handle(@Param('cartItemId') cartItemId: string) {
    const result = await this.removeCartItemUseCase.handle({
      cartItemId,
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
