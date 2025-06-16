import { Product } from "@/features/products/types/product";
import { axiosClient } from "@/lib/axios/axios-client";
import { PaginationOutput } from "@/lib/axios/types/pagination-data";

export class ProductsApi {
  static async listAll({ page = 1, query }: { page?: number; query?: string }) {
    const response = await axiosClient.get<PaginationOutput<Product>>(
      "/products",
      {
        params: {
          page,
          query,
        },
      },
    );
    return response.data;
  }
}
