import { useMutation, useQueryClient } from "@tanstack/react-query";
import { parseAsInteger, useQueryState } from "nuqs";
import { CartItemsApi } from "../../api/cart-items-api";
import { createCartItemStore } from "../../stores/cart-item-store";
import { useListCartItemsQuery } from "./use-list-cart-items-query";

export function useRemoveCartItemMutation() {
  const [page] = useQueryState("pagina", parseAsInteger.withDefault(1));
  const queryClient = useQueryClient();
  const cartItemStore = createCartItemStore();
  const { refetch } = useListCartItemsQuery();

  return useMutation({
    mutationFn: CartItemsApi.removeCartItem,
    onSuccess: (_data, { cartItemId }) => {
      queryClient.setQueryData(["list-cart-items", page], (oldData: any) => ({
        ...oldData,
        items:
          oldData?.items?.filter((item: any) => item.id !== cartItemId) || [],
      }));
      refetch();
      cartItemStore.removeProduct(cartItemId);
    },
  });
}
