import { z } from "zod";
import { formErrors } from "../form-errors";

const zipCodeRegex = /^\d{5}-\d{3}$/;

export const zipCode = z
  .string()
  .regex(zipCodeRegex, formErrors.zipCode.invalid)
  .transform((value) => value.replace(/\D/g, ""));
