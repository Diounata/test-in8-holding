import { create } from "zustand";

interface AddProductToCartStore {
  amount: number;
  actions: {
    setAmount: (amount: number) => void;
  };
}

export const useAddProductToCartStore = create<AddProductToCartStore>(
  (set) => ({
    amount: 1,
    actions: {
      setAmount: (amount: number) => set((state) => ({ ...state, amount })),
    },
  }),
);
