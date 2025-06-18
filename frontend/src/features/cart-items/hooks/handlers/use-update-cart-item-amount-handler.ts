import { Product } from "@/features/products/types/product";
import { useEffect } from "react";
import { createCartItemStore } from "../../stores/cart-item-store";
import { CartItem } from "../../types/cart-item";
import { useRemoveCartItemMutation } from "../react-query/use-remove-cart-item-mutation";
import { useUpdateCartItemAmountMutation } from "../react-query/use-update-cart-item-amount-mutation";

interface Props {
  item: CartItem & { product: Product };
}

export function useUpdateCartItemAmountHandler({ item }: Props) {
  const updateCartItemAmountMutation = useUpdateCartItemAmountMutation();
  const removeCartItemMutation = useRemoveCartItemMutation();
  const cartItemStore = createCartItemStore();
  const amount = cartItemStore.productsAmount[item.id];

  const updateAmount = async (newAmount: number) => {
    if (newAmount < 0) return;
    if (newAmount === 0) {
      await removeCartItemMutation.mutateAsync({ cartItemId: item.id });
      cartItemStore.removeProduct(item.id);
      return;
    }

    await updateCartItemAmountMutation.mutateAsync({
      amount: newAmount,
      cartItemId: item.id,
    });

    cartItemStore.setProductAmount(item.id, newAmount);
  };

  const handleDecrease = () => updateAmount((amount ?? 1) - 1);
  const handleIncrease = () => updateAmount((amount ?? 0) + 1);

  useEffect(() => {
    if (cartItemStore.productsAmount[item.id] === undefined) {
      cartItemStore.setProductAmount(item.id, item.amount);
    }
  }, [cartItemStore, item.amount, item.id]);

  return {
    amount,
    handleDecrease,
    handleIncrease,
  };
}
