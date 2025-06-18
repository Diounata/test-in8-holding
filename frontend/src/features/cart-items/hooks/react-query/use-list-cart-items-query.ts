"use client";
import { CartItemsApi } from "@/features/cart-items/api/cart-items-api";
import { useQuery } from "@tanstack/react-query";
import { parseAsInteger, useQueryState } from "nuqs";

export function useListCartItemsQuery() {
  const [page] = useQueryState("pagina", parseAsInteger.withDefault(1));

  return useQuery({
    queryKey: ["list-cart-items", page],
    queryFn: async () =>
      await CartItemsApi.listAll({
        page,
        
      }),
    placeholderData: (prev) => prev,
  });
}
