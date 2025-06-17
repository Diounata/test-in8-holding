"use client";
/* eslint-disable @next/next/no-img-element */
import { Product } from "../../types/product";

interface Props {
  product: Product;
}

export function ProductImage({ product }: Props) {
  return (
    <div className="@container">
      <div className="relative mx-auto aspect-square w-3/4 overflow-hidden rounded-xl bg-gray-100 sm:w-1/2 lg:w-1/3 xl:w-1/4">
        <img
          src={product.image ?? "https://placehold.co/400?text=not-found"}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://placehold.co/100?text=404";
          }}
        />
      </div>
    </div>
  );
}
