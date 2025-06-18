import { PaginationWithParam } from "@/components/ui/pagination-by-param";
import { useListCartItemsQuery } from "../../hooks/react-query/use-list-cart-items-query";

export function CartItemsPagination() {
  const listCartItemsQuery = useListCartItemsQuery();

  if (!listCartItemsQuery.data) return null;

  const { totalItems, itemsPerPage } = listCartItemsQuery.data;

  return (
    <PaginationWithParam
      queryStateName="pagina"
      totalItems={totalItems}
      itemsPerPage={itemsPerPage}
    />
  );
}
