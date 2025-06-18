"use client";
import { cn } from "@/lib/utils";
import { House, Package, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNavigation() {
  const pathname = usePathname();
  const navItems = [
    { href: "/", icon: House, label: "Início" },
    { href: "/carrinho", icon: ShoppingCart, label: "Carrinho" },
    { href: "/pedidos", icon: Package, label: "Pedidos" },
  ];

  return (
    <div className="sticky bottom-0 z-50 flex w-full gap-2 border-t border-[#e6e9f4] bg-[#f8f9fc] px-4 pt-2 pb-3 md:hidden">
      {navItems.map(({ href, icon: Icon, label }) => {
        const isActive = href === pathname;
        const activityStyleClasses = isActive
          ? "text-primary font-semibold"
          : "text-[#0d0f1c]";

        return (
          <Link
            key={label}
            href={href}
            className={cn(
              "just flex flex-1 flex-col items-center justify-end gap-1",
              activityStyleClasses,
            )}
          >
            <div
              className={cn(
                "flex h-8 items-center justify-center",
                activityStyleClasses,
              )}
            >
              <Icon />
            </div>
            <p
              className={cn(
                "text-xs leading-normal font-medium tracking-[0.015em]",
                activityStyleClasses,
              )}
            >
              {label}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
