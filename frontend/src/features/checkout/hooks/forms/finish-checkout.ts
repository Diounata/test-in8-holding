import {
  FinishCheckoutFormInput,
  finishCheckoutFormSchema,
} from "@/features/checkout/validators/finish-checkout-form-validator";
import { useFinishOrderMutation } from "@/features/orders/hooks/react-query/use-finish-order-mutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export function useFinishCheckout() {
  const router = useRouter();
  const finishOrderMutation = useFinishOrderMutation();
  const finishCheckoutForm = useForm<FinishCheckoutFormInput>({
    resolver: zodResolver(finishCheckoutFormSchema),
    defaultValues: {
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
    },
  });

  const onSubmit: SubmitHandler<FinishCheckoutFormInput> = useCallback(
    async ({ email, phone, address, city, state, zipCode }) => {
      await finishOrderMutation.mutateAsync({
        email,
        phone,
        address,
        city,
        state,
        zipCode,
      });

      toast.success("Checkout finalizado com sucesso!");
      router.push("/pedidos");
    },
    [finishOrderMutation, router],
  );

  return {
    finishCheckoutForm,
    onSubmit,
  };
}
