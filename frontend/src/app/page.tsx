import { ProductGrid } from "@/features/products/components/products-display";
import { SearchProductsInput } from "@/features/products/components/search-products-input";

export default function ShopPage() {
  return (
    <div className="flex flex-col gap-1 p-4 md:px-16 md:py-8 xl:px-24 xl:py-12">
      <SearchProductsInput />
      <ProductGrid />
    </div>
  );
}
