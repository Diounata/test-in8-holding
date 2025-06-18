import { useListCartItemsQuery } from "@/features/cart-items/hooks/react-query/use-list-cart-items-query";
import { formatCurrency } from "@/utils/formatters/format-currency";

export function CartSummary() {
  const { data: cartItems } = useListCartItemsQuery();

  const subtotal =
    cartItems?.items.reduce((acc, item) => {
      const price = item.product.discountPrice
        ? +item.product.price - +item.product.discountPrice
        : +item.product.price;
      return acc + price * item.amount;
    }, 0) || 0;

  const shipping = 23.5;
  const taxes = 7;
  const total = subtotal + shipping + taxes;

  return (
    <div className="flex w-full flex-col">
      <h3 className="pt-4 pb-2 text-lg leading-tight font-bold tracking-[-0.015em] text-[#0d0f1c] md:text-xl lg:pb-3">
        Resumo de compra
      </h3>

      <div className="flex flex-col">
        {[
          { label: "Subtotal", value: subtotal },
          { label: "Frete", value: shipping },
          { label: "Taxas", value: taxes },
          { label: "Total", value: total },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="flex justify-between gap-x-6 py-2 md:py-3"
          >
            <p className="text-sm leading-normal font-normal text-[#47569e] md:text-base">
              {label}
            </p>
            <p className="text-right text-sm leading-normal font-normal text-[#0d0f1c] md:text-base">
              {formatCurrency(value)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
