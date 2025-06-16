import { ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between bg-[#f8f9fc] p-4 pb-2 shadow-md">
      <section className="flex items-center gap-2">
        <Image src="/images/logo.png" alt="Shopmart" width={48} height={48} />
        <h2 className="flex-1 text-center text-lg leading-tight font-bold tracking-[-0.015em] text-[#0d0f1c]">
          Shopmart
        </h2>
      </section>

      <div className="flex w-12 items-center justify-end">
        <button className="flex h-12 max-w-[480px] min-w-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-transparent p-0 text-base leading-normal font-bold tracking-[0.015em] text-[#0d0f1c]">
          <div className="text-[#0d0f1c]">
            <ShoppingCart />
          </div>
        </button>
      </div>
    </header>
  );
}
