/* eslint-disable @next/next/no-img-element */
import { Product } from "../../types/product";

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  return (
    <div className="flex flex-col gap-3 pb-3">
      <div className="relative mx-auto aspect-square w-full max-w-[158px] overflow-hidden rounded-xl bg-gray-100">
        <img
          src={product.image ?? "https://placehold.co/400?text=not-found"}
          alt={product.name}
          className="h-full w-full object-cover"
          sizes="(max-width: 640px) 100vw, 158px"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://placehold.co/100?text=404";
          }}
        />
      </div>

      <div>
        <p className="text-basew leading-normal font-medium text-[#0d0f1c]">
          {product.name}
        </p>

        <p className="line-clamp-3 text-sm leading-normal font-normal text-[#47579e]">
          {product.description}
        </p>
      </div>
    </div>
  );
}
