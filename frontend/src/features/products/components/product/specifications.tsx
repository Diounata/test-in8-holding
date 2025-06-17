import { Product } from "../../types/product";

interface Props {
  product: Product;
}

export function Specifications({ product }: Props) {
  const specifications = [
    {
      label: "Categoria",
      value: product.category,
    },
    {
      label: "Material",
      value: product.material,
    },
  ];

  return (
    <>
      <h3 className="px-4 pt-4 pb-2 text-lg leading-tight font-bold tracking-[-0.015em] text-[#0d0f1c]">
        Especificaçõe
      </h3>

      <div className="grid grid-cols-[20%_1fr] gap-x-6 p-4">
        {specifications.map(({ label, value }) => (
          <SpecificationItem label={label} value={value} key={label} />
        ))}
      </div>
    </>
  );
}

function SpecificationItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#ced2e9] py-5">
      <p className="text-sm leading-normal font-normal text-[#47569e]">
        {label}
      </p>

      <p className="text-sm leading-normal font-normal text-[#0d0f1c]">
        {value}
      </p>
    </div>
  );
}
