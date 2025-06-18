import { Product } from "@/features/products/types/product";
import { axiosClient } from "@/lib/axios/axios-client";
import { PaginationOutput } from "@/lib/axios/types/pagination-data";
import { CartItem } from "../types/cart-item";

export class CartItemsApi {
  static async listAll({
    page = 1,
    query,
    itemsPerPage = 5,
  }: {
    page?: number;
    query?: string;
    itemsPerPage?: number;
  }) {
    const response = await axiosClient.get<
      PaginationOutput<CartItem & { product: Product }>
    >("/cart-items", {
      params: {
        page,
        query,
        itemsPerPage,
      },
    });
    return response.data;
  }

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

  static async updateAmount({
    cartItemId,
    amount,
  }: {
    cartItemId: string;
    amount: number;
  }) {
    const response = await axiosClient.patch(
      `/cart-items/amount/${cartItemId}`,
      {
        amount,
      },
    );
    return response.data;
  }

  static async removeCartItem({ cartItemId }: { cartItemId: string }) {
    const response = await axiosClient.delete(`/cart-items/${cartItemId}`);
    return response.data;
  }
}
