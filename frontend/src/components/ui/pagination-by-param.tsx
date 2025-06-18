import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { parseAsInteger, useQueryState } from "nuqs";
import { useEffect } from "react";

interface PaginationProps {
  queryStateName: string;
  totalItems: number;
  itemsPerPage?: number;
}

export function PaginationWithParam({
  queryStateName,
  totalItems,
  itemsPerPage = 10,
}: PaginationProps) {
  const [page, setPage] = useQueryState(
    queryStateName,
    parseAsInteger.withDefault(1),
  );

  useEffect(() => {
    if (page <= 0) {
      setPage(1);
    }
  }, [page, setPage]);

  const pagesTotal = Math.max(1, Math.ceil(totalItems / itemsPerPage));

  const setFirstPage = () => setPage(1);

  const previousPage = () => {
    if (page === 1) return;
    setPage((p) => p - 1);
  };

  const nextPage = () => {
    if (page === pagesTotal) return;
    setPage((p) => p + 1);
  };

  const setLastPage = () => setPage(pagesTotal);

  if (pagesTotal <= 1) return null;

  return (
    <section
      className={cn(
        "flex w-full flex-col-reverse items-center justify-center gap-1 sm:flex-col-reverse sm:justify-center sm:gap-3",
        pagesTotal <= 0 && "hidden",
      )}
    >
      <Typography
        variant="smallText"
        className="mt-2 text-sm sm:mt-0 sm:text-base"
      >
        Página <span className="font-semibold">{page}</span> de{" "}
        <span className="font-semibold">{pagesTotal}</span>
      </Typography>

      <section className="flex">
        <Button
          variant="ghost"
          size="icon"
          onClick={setFirstPage}
          disabled={page <= 1}
          className="h-8 w-8 sm:h-10 sm:w-10"
        >
          <ChevronsLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={previousPage}
          disabled={page <= 1}
          className="h-8 w-8 sm:h-10 sm:w-10"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextPage}
          disabled={page >= pagesTotal}
          className="h-8 w-8 sm:h-10 sm:w-10"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={setLastPage}
          disabled={page >= pagesTotal}
          className="h-8 w-8 sm:h-10 sm:w-10"
        >
          <ChevronsRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
      </section>
    </section>
  );
}
