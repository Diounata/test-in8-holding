import { CheckoutsApi } from "@/features/checkout/api/checkouts-api";
import { useMutation } from "@tanstack/react-query";

export function useFinishCheckoutMutation() {
  return useMutation({
    mutationFn: CheckoutsApi.finishOrder,
  });
}
