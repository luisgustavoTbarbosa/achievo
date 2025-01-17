
import { Search } from "lucide-react";
import { SearchTaskContainer } from "./styles";

export function SearchTask () {
  return (
    <SearchTaskContainer>
      <label htmlFor="search">
        <Search color="#C4C4CC" size={16} />
      </label>
      <input type="text" placeholder="Buscar" id="search" />
    </SearchTaskContainer>
  )
}
