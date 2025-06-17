import { useMutation } from "@tanstack/react-query";
import { CartItemsApi } from "../../api/cart-items-api";

export function useAddCartItemMutation() {
  return useMutation({
    mutationFn: CartItemsApi.addCartItem,
  });
}
