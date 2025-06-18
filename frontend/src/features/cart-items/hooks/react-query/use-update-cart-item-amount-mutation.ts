import { Product } from "@/features/products/types/product";
import { PaginationOutput } from "@/lib/axios/types/pagination-data";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { parseAsInteger, useQueryState } from "nuqs";
import { CartItemsApi } from "../../api/cart-items-api";
import { createCartItemStore } from "../../stores/cart-item-store";
import { CartItem } from "../../types/cart-item";

export function useUpdateCartItemAmountMutation() {
  const [page] = useQueryState("pagina", parseAsInteger.withDefault(1));
  const queryClient = useQueryClient();
  const cartItemStore = createCartItemStore();

  return useMutation({
    mutationFn: CartItemsApi.updateAmount,
    onSuccess: (data, variables, context) => {
      queryClient.setQueryData<any>(
        ["list-cart-items", page],
        (oldData: PaginationOutput<CartItem & { product: Product }>) => {
          if (!oldData) return oldData;
          const updatedItems = oldData.items.map((item) => {
            if (item.id === variables.cartItemId) {
              return {
                ...item,
                amount: variables.amount,
              };
            }
            return item;
          });
          return {
            ...oldData,
            items: updatedItems,
          };
        },
      );

      cartItemStore.setProductAmount(variables.cartItemId, variables.amount);
    },
  });
}
