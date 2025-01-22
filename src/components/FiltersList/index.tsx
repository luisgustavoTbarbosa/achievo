import { Check, Package2, TriangleAlert, X } from "lucide-react";
import { FilterCard } from "../FilterCard";
import { FiltersListContainer, StatusFilters } from "./styles";

export function FiltersList () {
  return (
    <FiltersListContainer>
      <StatusFilters>
        <FilterCard icon={<Check color="#FFFFFF" size={24} />} cardTitle="Concluídos" cardVariant="primary" />
        <FilterCard icon={<X color="#FFFFFF" size={24} />} cardTitle="Cancelados" cardVariant="canceled" />
        <FilterCard icon={<TriangleAlert color="#FFFFFF" size={24} />} cardTitle="Pendentes" cardVariant="paused" />
        <FilterCard icon={<Package2 color="#FFFFFF" size={24} />} cardTitle="Todos" cardVariant="all" />
      </StatusFilters>
      <div></div>
    </FiltersListContainer>
  )
}
