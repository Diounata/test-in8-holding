import { PaginationWithParam } from "@/components/ui/pagination-by-param";
import { useListProductsQuery } from "@/features/products/hooks/react-query/use-list-products-query";

export function ProductsPagination() {
  const listProductsQuery = useListProductsQuery();

  if (!listProductsQuery.data) return null;

  const { totalItems, itemsPerPage } = listProductsQuery.data;

  return (
    <PaginationWithParam
      queryStateName="pagina"
      totalItems={totalItems}
      itemsPerPage={itemsPerPage}
    />
  );
}
