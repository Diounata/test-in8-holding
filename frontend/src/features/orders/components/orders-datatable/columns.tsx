"use client";
import { Order } from "@/features/orders/types/order";
import { formatCurrency } from "@/utils/formatters/format-currency";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

export const orderDatatableColumns: ColumnDef<Order>[] = [
  {
    accessorKey: "id",
    header: "Pedido",
  },
  {
    accessorKey: "totalPrice",
    header: "Valor total",
    cell: ({ row }) => formatCurrency(row.original.totalPrice),
  },
  {
    accessorKey: "createdAt",
    header: "Concluído em",
    cell: ({ row }) => format(row.original.createdAt, "dd/MM/yyyy 'às' HH:mm"),
  },
];
