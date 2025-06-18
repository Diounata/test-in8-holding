"use client";

interface Props {
  amount: number;
  removeItemOnAmountTo0?: boolean;
  handleDecrease: () => void;
  handleIncrease: () => void;
}

export function ProductAmountSelector({
  amount,
  removeItemOnAmountTo0 = false,
  handleDecrease,
  handleIncrease,
}: Props) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center gap-1 rounded-lg bg-[#f8f9fc] sm:gap-4">
        <button
          onClick={handleDecrease}
          disabled={removeItemOnAmountTo0 ? amount <= 0 : amount <= 1}
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-[#ced2e9] text-xl font-bold text-[#47569e] transition-colors hover:bg-[#abb2d9] disabled:cursor-not-allowed disabled:opacity-50 sm:h-10 sm:w-10 sm:text-2xl"
        >
          -
        </button>

        <span className="w-8 text-center text-lg font-bold text-[#0d0f1c] sm:w-10 sm:text-xl">
          {amount}
        </span>

        <button
          onClick={handleIncrease}
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-[#ced2e9] text-xl font-bold text-[#47569e] transition-colors hover:bg-[#abb2d9] sm:h-10 sm:w-10 sm:text-2xl"
        >
          +
        </button>
      </div>
    </div>
  );
}
