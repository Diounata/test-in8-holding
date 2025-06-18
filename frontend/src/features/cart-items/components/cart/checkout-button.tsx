import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CheckoutButton() {
  return (
    <div className="fixed bottom-20 my-4 flex w-4/5 justify-center md:bottom-3">
      <Button
        className="h-12 w-full max-w-[480px] rounded-lg text-base font-bold tracking-[0.015em]"
        asChild
      >
        <Link href="/checkout">
          <span className="truncate">Finalizar compra</span>
        </Link>
      </Button>
    </div>
  );
}
