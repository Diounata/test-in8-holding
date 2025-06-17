/* eslint-disable @next/next/no-img-element */
import { formatCurrency } from "@/utils/formatters/format-currency";
import Link from "next/link";
import { Product } from "../../../types/product";

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  return (
    <Link href={`/produtos/${product.id}`} passHref>
      <div className="flex flex-col gap-3 pb-3">
        <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
          <img
            src={product.image ?? "https://placehold.co/400?text=not-found"}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            sizes="100vw"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://placehold.co/100?text=404";
            }}
          />
        </div>

        <div>
          <p className="text-base leading-normal font-medium text-[#0d0f1c]">
            {product.name}
          </p>

          <span className="text-sm font-semibold text-[#0d0f1c] md:text-lg lg:text-xl">
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

          <p className="line-clamp-3 text-sm leading-normal font-normal text-[#47579e]">
            {product.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
