import { ProductGrid } from "@/features/products/components/products-display";
import { SearchProductsInput } from "@/features/products/components/search-products-input";

export default function ShopPage() {
  return (
    <div className="flex flex-col gap-1 px-4 py-4">
      <SearchProductsInput />
      <ProductGrid />
    </div>
  );
}
