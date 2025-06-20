import { CartButton } from "@/features/cart-items/components/cart-button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const links = [
    { href: "/", label: "Início" },
    { href: "/carrinho", label: "Carrinho" },
    { href: "/pedidos", label: "Pedidos" },
  ];

  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between bg-[#f8f9fc] p-4 pb-2 shadow-md md:px-16 md:py-6">
      <section className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Shopmart"
            width={40}
            height={40}
            className="h-8 w-8 md:h-12 md:w-12"
          />

          <h2 className="flex-1 text-lg leading-tight font-bold tracking-[-0.015em] text-[#0d0f1c] md:text-xl">
            Shopmart
          </h2>
        </Link>

        <nav className="ml-4 hidden items-center gap-4 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="md:text-md text-base font-semibold text-[#0d0f1c] hover:text-[#0d0f1c]/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </section>

      <div className="flex w-10 items-center justify-end md:w-12">
        <CartButton />
      </div>
    </header>
  );
}
