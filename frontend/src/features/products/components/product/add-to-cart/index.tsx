"use client";
import { Button } from "@/components/ui/button";
import { useAddCartItemHandler } from "@/features/cart-items/hooks/handlers/use-add-cart-item-handler";
import { ProductAmountSelector } from "./product-amount-selector";

export function AddToCart() {
  const { addCartItemHandler, amount, handleIncrease, handleDecrease } =
    useAddCartItemHandler();

  return (
    <div className="flex flex-col md:flex-row md:items-center md:gap-4">
      <ProductAmountSelector
        amount={amount}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
      />

      <div className="mb-5 flex px-4 py-3 md:mb-0 md:flex-1 md:p-0">
        <Button
          size="lg"
          onClick={addCartItemHandler}
          className="h-12 min-w-[84px] flex-1 px-5 text-base font-bold tracking-[0.015em] md:max-w-[480px]"
        >
          <span className="truncate">Adicionar ao carrinho</span>
        </Button>
      </div>
    </div>
  );
}
