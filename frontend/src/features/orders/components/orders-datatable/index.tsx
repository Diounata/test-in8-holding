"use client";
import { Datatable } from "@/components/ui/datatable";
import { Loading } from "@/components/ui/loading";
import { Typography } from "@/components/ui/typography";
import { useListOrdersQuery } from "../../hooks/react-query/use-list-orders-query";
import { orderDatatableColumns } from "./columns";

export function OrdersDatatable() {
  const { data: orders } = useListOrdersQuery();

  if (!orders?.items) return <Loading label="Carregando pedidos..." />;

  return (
    <Datatable.Root columns={orderDatatableColumns} data={orders?.items}>
      <Datatable.Header className="flex-col items-start gap-3 md:flex-row md:items-end">
        <div className="flex flex-col">
          <Typography variant="h2">Pedidos</Typography>
          <Typography variant="smallText" className="font-normal opacity-65">
            Visualize os seus pedidos feitos na plataforma
          </Typography>
        </div>
      </Datatable.Header>

      <Datatable.Table />

      <Datatable.Footer>
        <Datatable.PageContentLength
          length={orders.totalItems}
          singularText="pedido"
          pluralText="pedidos"
        />

        <Datatable.Pagination pagesTotal={1} />
      </Datatable.Footer>
    </Datatable.Root>
  );
}
