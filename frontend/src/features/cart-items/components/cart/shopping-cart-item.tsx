"use client";
/* eslint-disable @next/next/no-img-element */
import { ProductAmountSelector } from "@/features/products/components/product/add-to-cart/product-amount-selector";
import { Product } from "@/features/products/types/product";
import { formatCurrency } from "@/utils/formatters/format-currency";
import { useUpdateCartItemAmountHandler } from "../../hooks/handlers/use-update-cart-item-amount-handler";
import { CartItem } from "../../types/cart-item";

interface Props {
  item: CartItem & { product: Product };
}

export default function ShoppingCartItem({ item }: Props) {
  const { amount, handleDecrease, handleIncrease } =
    useUpdateCartItemAmountHandler({ item });

  return (
    <div className="flex items-center justify-between gap-2 rounded-lg bg-[#f8f9fc] py-4 md:gap-4">
      <img
        src={item.product.image ?? "https://placehold.co/400?text=not-found"}
        alt={item.product.name}
        className="size-14 rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-110 md:size-16 lg:size-20"
        sizes="100vw"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = "https://placehold.co/100?text=404";
        }}
      />

      <div className="w-full">
        <p className="line-clamp-1 font-medium text-[#0d0f1c] md:text-lg">
          {item.product.name}
        </p>

        <p className="text-sm text-[#47569e] md:text-base">
          {formatCurrency(item.product.price)}
        </p>
      </div>

      <ProductAmountSelector
        removeItemOnAmountTo0={true}
        amount={amount}
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
      />
    </div>
  );
}
