"use client";
import { ProductsApi } from "@/features/products/api/products-api";
import { useQuery } from "@tanstack/react-query";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";

export function useListProductsQuery() {
  const [page] = useQueryState("pagina", parseAsInteger.withDefault(1));
  const [productNameFilter] = useQueryState(
    "nome-produto",
    parseAsString.withDefault(""),
  );

  return useQuery({
    queryKey: ["list-products", page, productNameFilter],
    queryFn: async () =>
      await ProductsApi.listAll({
        page,
        query: productNameFilter ? `name=${productNameFilter}` : "",
      }),
  });
}
