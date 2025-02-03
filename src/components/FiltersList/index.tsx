import { Check, Package2, Plus, TriangleAlert, X } from "lucide-react";
import { FilterCard } from "../FilterCard";
import { FiltersListContainer, Goals, GoalsFilters, GoalsFiltersHeader, StatusFilters } from "./styles";

export function FiltersList () {
  return (
    <FiltersListContainer>
      <StatusFilters>
        <FilterCard icon={<Check color="#FFFFFF" size={24} />} cardTitle="Concluídos" cardVariant="primary" />
        <FilterCard icon={<X color="#FFFFFF" size={24} />} cardTitle="Cancelados" cardVariant="canceled" />
        <FilterCard icon={<TriangleAlert color="#FFFFFF" size={24} />} cardTitle="Pendentes" cardVariant="paused" />
        <FilterCard icon={<Package2 color="#FFFFFF" size={24} />} cardTitle="Todos" cardVariant="all" />
      </StatusFilters>
      <GoalsFilters>
        <GoalsFiltersHeader>
          <p>Metas</p>
          <button>
            <Plus color="#FFFFFF" size={18} />
          </button>
        </GoalsFiltersHeader>
        <Goals>
          <div>
            <p>Estudos</p>
            <span>12</span>
          </div>
          <div>
            <p>Esporte</p>
            <span>6</span>
          </div>
        </Goals>
      </GoalsFilters>
    </FiltersListContainer>
  )
}
