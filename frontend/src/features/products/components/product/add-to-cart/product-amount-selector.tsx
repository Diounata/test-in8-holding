"use client";
import { useAddProductToCartStore } from "@/features/products/stores/add-product-to-cart-store";

export function ProductAmountSelector() {
  const { amount, actions } = useAddProductToCartStore();

  const handleDecrease = () => {
    actions.setAmount(amount > 1 ? amount - 1 : 1);
  };

  const handleIncrease = () => {
    actions.setAmount(amount + 1);
  };

  return (
    <div className="flex items-center justify-center p-2 sm:p-4 sm:px-0">
      <div className="flex items-center gap-2 rounded-lg bg-[#f8f9fc] p-1 sm:gap-4 sm:p-2">
        <button
          onClick={handleDecrease}
          disabled={amount <= 1}
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-[#ced2e9] text-xl font-bold text-[#47569e] transition-colors hover:bg-[#abb2d9] disabled:cursor-not-allowed disabled:opacity-50 sm:h-10 sm:w-10 sm:text-2xl"
        >
          -
        </button>

        <span className="w-8 text-center text-lg font-bold text-[#0d0f1c] sm:w-10 sm:text-xl">
          {amount}
        </span>

        <button
          onClick={handleIncrease}
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-[#ced2e9] text-xl font-bold text-[#47569e] transition-colors hover:bg-[#abb2d9] sm:h-10 sm:w-10 sm:text-2xl"
        >
          +
        </button>
      </div>
    </div>
  );
}
