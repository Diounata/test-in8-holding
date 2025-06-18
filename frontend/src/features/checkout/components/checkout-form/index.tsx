"use client";
import { Input } from "@/components/ui/form/input";
import { SubmitButton } from "@/components/ui/form/submit-button";
import { FormProvider } from "react-hook-form";
import { useFinishCheckout } from "../../hooks/forms/finish-checkout";
import { StateSelect } from "./state-select";

export function CheckoutForm() {
  const { finishCheckoutForm, onSubmit } = useFinishCheckout();

  return (
    <FormProvider {...finishCheckoutForm}>
      <form
        onSubmit={finishCheckoutForm.handleSubmit(onSubmit)}
        className="flex w-full flex-col"
      >
        <h3 className="pt-4 pb-2 text-lg leading-tight font-bold tracking-[-0.015em] text-[#0d0f1c] md:text-xl lg:pt-0 lg:pb-3">
          Informações de pagamento
        </h3>

        <div className="grid gap-4 py-3">
          <Input label="E-mail" name="email" />
          <Input label="Telefone" name="phone" mask="(##) #####-####" />
          <Input label="Endereço" name="address" />
          <Input label="Cidade" name="city" />
          <StateSelect />
          <Input label="CEP" name="zipCode" mask="#####-###" />
        </div>

        <div className="flex justify-end pt-4">
          <SubmitButton
            onSubmitChildren="Finalizando"
            className="h-12 w-full rounded-lg text-base font-bold tracking-[0.015em]"
          >
            <span className="truncate">Finalizar comprar</span>
          </SubmitButton>
        </div>
      </form>
    </FormProvider>
  );
}
