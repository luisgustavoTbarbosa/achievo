import { FiltersList } from "./components/FiltersList";
import { Logo } from "./components/Logo";
import { TasksHeader } from "./components/TasksHeder";
import { TasksList } from "./components/TasksList";
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
          <TasksHeader />
          <TasksList />
        </div>
      </div>
    </>
  )
}
