import { FiltersList } from "./components/FiltersList";
import { Logo } from "./components/Logo";
import { SearchTask } from "./components/SearchTask";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyles />
      <div className="app-container">
        <div>
          <Logo />
          <FiltersList />
        </div>
        <div>
          <SearchTask />
        </div>
      </div>
    </>
  )
}
