import { Select } from "@/components/ui/form/select";
import { useMemo } from "react";

export function StateSelect() {
  const options = useMemo(
    () => [
      { id: "ac", value: "AC", label: "Acre" },
      { id: "al", value: "AL", label: "Alagoas" },
      { id: "ap", value: "AP", label: "Amapá" },
      { id: "am", value: "AM", label: "Amazonas" },
      { id: "ba", value: "BA", label: "Bahia" },
      { id: "ce", value: "CE", label: "Ceará" },
      { id: "df", value: "DF", label: "Distrito Federal" },
      { id: "es", value: "ES", label: "Espírito Santo" },
      { id: "go", value: "GO", label: "Goiás" },
      { id: "ma", value: "MA", label: "Maranhão" },
      { id: "mt", value: "MT", label: "Mato Grosso" },
      { id: "ms", value: "MS", label: "Mato Grosso do Sul" },
      { id: "mg", value: "MG", label: "Minas Gerais" },
      { id: "pa", value: "PA", label: "Pará" },
      { id: "pb", value: "PB", label: "Paraíba" },
      { id: "pr", value: "PR", label: "Paraná" },
      { id: "pe", value: "PE", label: "Pernambuco" },
      { id: "pi", value: "PI", label: "Piauí" },
      { id: "rj", value: "RJ", label: "Rio de Janeiro" },
      { id: "rn", value: "RN", label: "Rio Grande do Norte" },
      { id: "rs", value: "RS", label: "Rio Grande do Sul" },
      { id: "ro", value: "RO", label: "Rondônia" },
      { id: "rr", value: "RR", label: "Roraima" },
      { id: "sc", value: "SC", label: "Santa Catarina" },
      { id: "sp", value: "SP", label: "São Paulo" },
      { id: "se", value: "SE", label: "Sergipe" },
      { id: "to", value: "TO", label: "Tocantins" },
    ],
    [],
  );

  return (
    <Select
      label="Estado"
      name="state"
      placeholder="Selecione um estado"
      options={options}
    />
  );
}
