import { useMutation } from "@tanstack/react-query";
import { CartItemsApi } from "../../api/cart-items-api";
import { useListCartItemsQuery } from "./use-list-cart-items-query";

export function useAddCartItemMutation() {
  const listCartItemsQuery = useListCartItemsQuery();

  return useMutation({
    mutationFn: CartItemsApi.addCartItem,
    onSuccess: () => {
      listCartItemsQuery.refetch();
    },
  });
}
