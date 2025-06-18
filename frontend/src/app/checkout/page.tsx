import { CartItemsApi } from "@/features/cart-items/api/cart-items-api";
import { CheckoutForm } from "@/features/checkout/components/checkout-form";
import { redirect } from "next/navigation";

export default async function CheckoutPage() {
  const { totalItems } = await CartItemsApi.listAll({ page: 1 });

  if (totalItems === 0) return redirect("/");

  return (
    <div className="flex w-full flex-col items-center justify-center bg-[#f8f9fc] p-4 lg:p-6">
      <div className="w-full max-w-lg">
        <h1 className="text-3xl font-bold text-[#0d0f1c]">Checkout</h1>
        <CheckoutForm />
      </div>
    </div>
  );
}
