import { cn } from "@/lib/utils";
import { House, Package, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function MobileNavigation() {
  const navItems = [
    { href: "#", icon: House, label: "Início", active: true },
    { href: "#", icon: ShoppingCart, label: "Carrinho", active: false },
    { href: "#", icon: Package, label: "Pedidos", active: false },
  ];

  return (
    <div className="sticky bottom-0 z-50 flex w-full gap-2 border-t border-[#e6e9f4] bg-[#f8f9fc] px-4 pt-2 pb-3">
      {navItems.map(({ href, icon: Icon, label, active }) => (
        <Link
          key={label}
          href={href}
          className={cn(
            "just flex flex-1 flex-col items-center justify-end gap-1",
            active ? "text-primary font-semibold" : "text-[#0d0f1c]",
          )}
        >
          <div
            className={cn(
              "flex h-8 items-center justify-center",
              active ? "text-primary font-semibold" : "text-[#0d0f1c]",
            )}
          >
            <Icon />
          </div>
          <p
            className={cn(
              "text-xs leading-normal font-medium tracking-[0.015em]",
              active ? "text-primary font-semibold" : "text-[#0d0f1c]",
            )}
          >
            {label}
          </p>
        </Link>
      ))}
    </div>
  );
}
