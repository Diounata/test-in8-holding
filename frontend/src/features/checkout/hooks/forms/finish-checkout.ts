import {
  FinishCheckoutFormInput,
  finishCheckoutFormSchema,
} from "@/features/checkout/validators/finish-checkout-form-validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useFinishCheckoutMutation } from "../react-query/use-finish-checkout-mutation";

export function useFinishCheckout() {
  const router = useRouter();
  const finishCheckoutMutation = useFinishCheckoutMutation();
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
      await finishCheckoutMutation.mutateAsync({
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
    [finishCheckoutMutation, router],
  );

  return {
    finishCheckoutForm,
    onSubmit,
  };
}
