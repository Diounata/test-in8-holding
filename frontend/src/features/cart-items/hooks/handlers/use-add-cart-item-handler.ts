"use client";
import { useAddProductToCartStore } from "@/features/products/stores/add-product-to-cart-store";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAddCartItemMutation } from "../react-query/use-add-cart-item-mutation";

export function useAddCartItemHandler() {
  const { productId } = useParams<{ productId: string }>();
  const { amount } = useAddProductToCartStore();
  const addCartItemMutation = useAddCartItemMutation();
  const router = useRouter();

  const addCartItemHandler = async () => {
    try {
      await addCartItemMutation.mutateAsync({
        productId,
        amount,
      });

      toast.info("Item adicionado ao carrinho com sucesso!");
      router.push("/");
    } catch (error) {
      console.error("Failed to add item to cart:", error);
      throw error;
    }
  };

  return { addCartItemHandler };
}
