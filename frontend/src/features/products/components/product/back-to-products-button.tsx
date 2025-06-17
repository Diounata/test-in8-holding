import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export function BackToProductsButton() {
  return (
    <Button
      variant="link"
      className="mb-4 flex w-fit items-center gap-2 text-blue-600 hover:text-blue-800"
      asChild
    >
      <Link href="/" aria-label="Voltar para a lista de produtos">
        <ChevronLeft />
        Voltar para produtos
      </Link>
    </Button>
  );
}
