"use client";
import { Loading } from "@/components/ui/loading";
import { CartItemsPagination } from "@/features/cart-items/components/cart/cart-items-pagination";
import { CartSummary } from "@/features/cart-items/components/cart/cart-summary";
import { CheckoutButton } from "@/features/cart-items/components/cart/checkout-button";
import ShoppingCartItem from "@/features/cart-items/components/cart/shopping-cart-item";
import { useListCartItemsQuery } from "@/features/cart-items/hooks/react-query/use-list-cart-items-query";

export default function CartPage() {
  const { data: cartItems } = useListCartItemsQuery();

  if (!cartItems)
    return (
      <Container>
        <Loading label="Buscando itens do carrinho..." />
      </Container>
    );

  if (cartItems.totalItems === 0)
    return (
      <Container>
        <p className="w-full text-gray-500">Seu carrinho está vazio.</p>
      </Container>
    );

  return (
    <Container>
      <CartSummary />
      <div className="h-full w-full">
        <h3 className="pt-4 text-lg leading-tight font-bold tracking-[-0.015em] text-[#0d0f1c] md:pt-2 md:text-xl">
          Produtos
        </h3>
        {cartItems.items.map((item) => (
          <ShoppingCartItem item={item} key={item.id} />
        ))}
        <CartItemsPagination />
      </div>
      <CheckoutButton />
    </Container>
  );
}

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative my-4 mb-20 flex flex-1 flex-col items-center px-4 lg:mx-auto lg:max-w-[900px] lg:gap-8 lg:px-6">
      {children}
    </div>
  );
}
