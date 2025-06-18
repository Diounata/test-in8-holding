import { OrdersApi } from "@/features/orders/api/orders-api";
import { useMutation } from "@tanstack/react-query";

export function useFinishOrderMutation() {
  return useMutation({
    mutationFn: OrdersApi.finishOrder,
  });
}
