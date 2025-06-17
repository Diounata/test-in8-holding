import { formatCurrency } from "@/utils/formatters/format-currency";
import { Product } from "../../types/product";
import { AddToCart } from "./add-to-cart";
import { Specifications } from "./specifications";

interface Props {
  product: Product;
}

export function ProductInfo({ product }: Props) {
  return (
    <div className="mx-auto max-w-2xl px-4 pt-5 pb-3 md:px-8 md:pt-8 md:pb-6">
      <h1 className="text-left text-[22px] leading-tight font-bold tracking-[-0.015em] text-[#0d0f1c] md:text-3xl md:leading-snug">
        {product.name}
      </h1>

      <p className="pt-1 pb-3 text-base leading-normal font-normal text-[#0d0f1c] md:pb-4 md:text-lg">
        {product.description}
      </p>

      <div className="pb-3 md:pb-5">
        <span className="text-lg font-semibold text-[#0d0f1c] md:text-2xl">
          {product.discountPrice ? (
            <>
              <span className="mr-2 text-gray-400 line-through">
                {formatCurrency(product.price)}
              </span>

              <span className="text-green-600">
                {formatCurrency(+product.price - +product.discountPrice)}
              </span>
            </>
          ) : (
            formatCurrency(product.price)
          )}
        </span>
      </div>

      <div className="mb-4 md:mb-6">
        <AddToCart />
      </div>

      <div>
        <Specifications product={product} />
      </div>
    </div>
  );
}
