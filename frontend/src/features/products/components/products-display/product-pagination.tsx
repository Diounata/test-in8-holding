import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { parseAsInteger, useQueryState } from "nuqs";
import { useEffect } from "react";
import { useListProductsQuery } from "../../hooks/react-query/use-list-products-query";

export function ProductsPagination() {
  const listProductsQuery = useListProductsQuery();
  const [page, setPage] = useQueryState(
    "pagina",
    parseAsInteger.withDefault(1),
  );

  useEffect(() => {
    if (page <= 0) {
      setPage(1);
    }
  }, [page, setPage]);

  if (!listProductsQuery.data) return null;

  const pagesTotal = listProductsQuery.data?.totalPages ?? 1;

  const setFirstPage = () => {
    setPage(1);
  };

  const previousPage = () => {
    if (page === 1) return;
    setPage((page) => page - 1);
  };

  const nextPage = () => {
    if (page === pagesTotal) return;
    setPage((page) => page + 1);
  };

  const setLastPage = () => {
    setPage(pagesTotal);
  };

  return (
    <section className="flex flex-col-reverse items-center justify-center gap-3">
      <Typography variant="smallText">
        Página {page} de {pagesTotal}
      </Typography>

      <section className="flex">
        <Button
          variant="ghost"
          size="icon"
          onClick={setFirstPage}
          disabled={page <= 1}
        >
          <ChevronsLeft />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={previousPage}
          disabled={page <= 1}
        >
          <ChevronLeft />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextPage}
          disabled={page >= pagesTotal}
        >
          <ChevronRight />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={setLastPage}
          disabled={page >= pagesTotal}
        >
          <ChevronsRight />
        </Button>
      </section>
    </section>
  );
}
