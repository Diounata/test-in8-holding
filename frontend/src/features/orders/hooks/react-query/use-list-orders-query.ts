"use client";
import { OrdersApi } from "@/features/orders/api/orders-api";
import { useQuery } from "@tanstack/react-query";
import { parseAsInteger, useQueryState } from "nuqs";

export function useListOrdersQuery() {
  const [page] = useQueryState("pagina", parseAsInteger.withDefault(1));

  return useQuery({
    queryKey: ["list-orders", page],
    queryFn: async () =>
      await OrdersApi.listAll({
        page,
      }),
    placeholderData: (prev) => prev,
  });
}
