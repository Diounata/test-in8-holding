import { Order } from "@/features/checkout/types/order";
import { axiosClient } from "@/lib/axios/axios-client";
import { PaginationOutput } from "@/lib/axios/types/pagination-data";

export class CheckoutsApi {
  static async listAll({ page = 1, query }: { page?: number; query?: string }) {
    const response = await axiosClient.get<PaginationOutput<Order>>("/orders", {
      params: {
        page,
        query,
      },
    });
    return response.data;
  }

  static async getOrder({ orderId }: { orderId: string }) {
    const response = await axiosClient.get<Order>("/orders/" + orderId);
    return response.data;
  }

  static async finishOrder({
    email,
    phone,
    address,
    city,
    state,
    zipCode,
  }: {
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
  }) {
    const response = await axiosClient.post("/orders/finish", {
      email,
      phone,
      address,
      city,
      state,
      zipCode,
    });
    return response.data;
  }
}
