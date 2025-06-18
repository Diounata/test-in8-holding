"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useListCartItemsQuery } from "../hooks/react-query/use-list-cart-items-query";

export function CartButton() {
  const { data: cartItems } = useListCartItemsQuery();

  if (!cartItems) return null;

  const itemsCount = cartItems.totalItems;
  const itemsCountLabel = itemsCount > 9 ? "+9" : (itemsCount ?? 0);

  return (
    <Button
      className="relative flex h-10 w-10 items-center justify-center rounded-full bg-transparent p-0 text-base font-bold tracking-[0.015em] text-[#0d0f1c] md:h-12 md:w-12"
      variant="ghost"
      asChild
    >
      <Link href="/carrinho">
        <Badge className="absolute top-0.5 -right-0.5 z-10 h-4 min-w-4 rounded-full px-1 font-mono text-xs tabular-nums md:top-1.5 md:right-0.5">
          {itemsCountLabel}
        </Badge>

        <ShoppingCart size={24} className="md:size-8" />
      </Link>
    </Button>
  );
}
