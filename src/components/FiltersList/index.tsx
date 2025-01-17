import { Check, TriangleAlert, X } from "lucide-react";
import { FilterCard } from "../FilterCard";
import { FiltersListContainer, StatusFilters } from "./styles";

export function FiltersList () {
  return (
    <FiltersListContainer>
      <StatusFilters>
        <FilterCard icon={<Check color="#FFFFFF" size={24} />} cardTitle="Concluídos" cardStatus="completed" />
        <FilterCard icon={<X color="#FFFFFF" size={24} />} cardTitle="Cancelados" cardStatus="completed" />
        <FilterCard icon={<TriangleAlert color="#FFFFFF" size={24} />} cardTitle="Pendentes" cardStatus="completed" />
      </StatusFilters>
      <div></div>
    </FiltersListContainer>
  )
}
