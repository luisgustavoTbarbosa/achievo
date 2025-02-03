import { NewTask } from "../NewTask";
import { SearchTask } from "../SearchTask";
import { TaskHeaderContainer } from "./styles";

export function TasksHeader () {
  return (
    <TaskHeaderContainer>
      <SearchTask />
      <NewTask />
    </TaskHeaderContainer>
  )
}