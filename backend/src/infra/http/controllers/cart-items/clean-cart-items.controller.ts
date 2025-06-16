import { CleanCartItemsUseCase } from '@/application/use-cases/cart-items/clean-cart-items';
import { Controller, Delete, HttpException } from '@nestjs/common';

@Controller('cart-items')
export class CleanCartItemsController {
  constructor(private cleanCartItemsUseCase: CleanCartItemsUseCase) {}

  @Delete('/')
  async handle() {
    const result = await this.cleanCartItemsUseCase.handle();

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
