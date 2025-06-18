import { formSchema } from "@/lib/zod/form-schemas";
import z from "zod";

export const finishCheckoutFormSchema = z.object({
  email: formSchema.email,
  phone: formSchema.phone,
  address: formSchema.string,
  city: formSchema.string,
  state: formSchema.string.length(2, "UF deve conter duas letras"),
  zipCode: formSchema.zipCode,
});

export type FinishCheckoutFormInput = z.infer<typeof finishCheckoutFormSchema>;
