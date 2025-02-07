import { CircleX, Pencil } from "lucide-react";
import { TasksListContainer } from "./style";

export function TasksList () {
  const tasksDb = [
    {
      id: 0,
      title: 'estudar',
      status: 'in_progress',
      tag: 'estudos'
    },
    {
      id: 1,
      title: 'validar projeto react',
      status: 'in_progress',
      tag: 'estudos'
    },
    {
      id: 2,
      title: 'Treinar',
      status: 'in_progress',
      tag: 'Saúde'
    }
  ]

  return (
    <TasksListContainer>
      {tasksDb.map(task => {
        return (
          <li key={task.id}>
            <div>
              <input type="checkbox" />
              <p>{task.title}</p>
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
        )
      })}
    </TasksListContainer>
  )
}