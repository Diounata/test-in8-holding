"use client";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";
import { useRef } from "react";

export function SearchProductsInput() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [, setPageQuery] = useQueryState(
    "pagina",
    parseAsInteger.withDefault(1),
  );
  const [productNameQuery, setProductNameQuery] = useQueryState(
    "nome-produto",
    parseAsString.withDefault(""),
  );

  return (
    <div className="flex max-w-[500px] grow justify-between gap-2">
      <label className="flex h-12 w-full flex-col">
        <div className="flex h-full w-full flex-1 items-stretch rounded-lg">
          <div
            className="flex items-center justify-center rounded-l-lg border-r-0 border-none bg-[#e6e9f4] pl-4 text-[#47569e]"
            data-icon="MagnifyingGlass"
            data-size="24px"
            data-weight="regular"
          >
            <Search />
          </div>

          <input
            ref={searchInputRef}
            placeholder="Buscar produtos por nome"
            className="form-input flex h-full w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg rounded-l-none border-l-0 border-none bg-[#e6e9f4] px-4 pl-2 text-base leading-normal font-normal text-[#0d0f1c] placeholder:text-[#47569e] focus:border-none focus:ring-0 focus:outline-0"
            defaultValue={productNameQuery}
          />
        </div>
      </label>

      <Button
        className="h-12 w-12"
        size="icon"
        onClick={() => {
          setProductNameQuery(searchInputRef.current?.value ?? "");
          setPageQuery(1);
        }}
      >
        <Search />
      </Button>
    </div>
  );
}
