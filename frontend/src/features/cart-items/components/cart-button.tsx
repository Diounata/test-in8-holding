import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export function CartButton() {
  return (
    <Button
      className="relative flex h-10 w-10 items-center justify-center rounded-full bg-transparent p-0 text-base font-bold tracking-[0.015em] text-[#0d0f1c] md:h-12 md:w-12"
      variant="ghost"
      asChild
    >
      <Link href="/carrinho">
        <Badge className="absolute top-0.5 right-0 z-10 h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
          8
        </Badge>

        <ShoppingCart size={24} className="md:size-8" />
      </Link>
    </Button>
  );
}
