import { z } from "zod";
import { formErrors } from "../form-errors";

const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;

export const phone = z
  .string()
  .refine((value) => !!value.match(phoneRegex), formErrors.phone.invalid)
  .transform((value) => value.replace(/\D/g, ""));
