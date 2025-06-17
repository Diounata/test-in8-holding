import { axiosClient } from "@/lib/axios/axios-client";

export class CartItemsApi {
  static async addCartItem({
    productId,
    amount,
  }: {
    productId: string;
    amount: number;
  }) {
    const response = await axiosClient.post("/cart-items", {
      productId,
      amount,
    });
    return response.data;
  }
}
