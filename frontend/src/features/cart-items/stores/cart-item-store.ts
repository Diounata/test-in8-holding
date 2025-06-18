import { create } from "zustand";

interface CartItemStore {
  productsAmount: { [productId: string]: number };
  setProductAmount: (id: string, amount: number) => void;
  removeProduct: (id: string) => void;
}

export const createCartItemStore = create<CartItemStore>((set) => ({
  productsAmount: {},
  setProductAmount: (id: string, amount: number) =>
    set((state) => ({
      productsAmount: { ...state.productsAmount, [id]: amount },
    })),
  removeProduct: (id: string) =>
    set((state) => {
      const { [id]: _, ...rest } = state.productsAmount;
      return { productsAmount: rest };
    }),
}));
