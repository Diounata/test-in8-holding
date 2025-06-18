import { OrdersDatatable } from "@/features/orders/components/orders-datatable";

export default function OrdersPage() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-[#f8f9fc] p-4 lg:p-6">
      <div className="w-full max-w-4xl">
        <OrdersDatatable />
      </div>
    </div>
  );
}
