import { CircleX, Pencil } from "lucide-react";
import { TasksListContainer } from "./style";

export function TasksList () {
  return (
    <TasksListContainer>
      <li>
        <div>
          <input type="checkbox" />
          <p>Café da manhã as 09:00</p>
        </div>
        <div>
          <button>
            <Pencil color="#FFFFFF" size={18} />
          </button>
          <button className="remove">
            <CircleX color="#FFFFFF" size={18} />
          </button>
        </div>
      </li>
      <li>
        <div>
          <input type="checkbox" />
          <p>Jantar as 18:00</p>
        </div>
        <div>
          <button>
            <Pencil color="#FFFFFF" size={18} />
          </button>
          <button className="remove">
            <CircleX color="#FFFFFF" size={18} />
          </button>
        </div>
      </li>
    </TasksListContainer>
  )
}