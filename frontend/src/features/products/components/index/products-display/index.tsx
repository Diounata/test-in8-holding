"use client";
import { If } from "@/components/if";
import { Loading } from "@/components/ui/loading";
import { useQueryState } from "nuqs";
import { useListProductsQuery } from "../../../hooks/react-query/use-list-products-query";
import { ProductCard } from "./product-card";
import { ProductsPagination } from "./product-pagination";

export function ProductGrid() {
  const { data: products } = useListProductsQuery();
  const [productNameFilter] = useQueryState("nome-produto");

  return (
    <section className="flex flex-col gap-4">
      <section>
        <h2 className="pt-5 pb-1 text-2xl font-bold tracking-tight text-[#0d0f1c]">
          Produtos
        </h2>

        {productNameFilter && (
          <p className="pb-3 text-base text-gray-600">
            Exibindo resultados para:{" "}
            <span className="font-semibold">{productNameFilter}</span>
          </p>
        )}
      </section>

      <If
        condition={products?.items}
        fallback={<Loading label="Buscando dados..." />}
      >
        <section className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 lg:grid-cols-3 lg:gap-8 xl:grid-cols-5">
          <If
            condition={products?.items.length}
            fallback={
              <div>
                Produto{" "}
                <span className="font-semibold">{productNameFilter}</span> não
                encontrado :(
              </div>
            }
          >
            {products?.items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </If>
        </section>

        <ProductsPagination />
      </If>
    </section>
  );
}
