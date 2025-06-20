import { ProductsApi } from "@/features/products/api/products-api";
import { BackToProductsButton } from "@/features/products/components/product/back-to-products-button";
import { ProductImage } from "@/features/products/components/product/product-image";
import { ProductInfo } from "@/features/products/components/product/product-info";

interface Props {
  params: { productId: string };
}

export default async function ProductPage({ params }: Props) {
  const product = await ProductsApi.getProduct({
    productId: await params.productId,
  });

  return (
    <div className="my-4 flex flex-col">
      <BackToProductsButton />
      <ProductImage product={product} />
      <ProductInfo product={product} />
    </div>
  );
}
