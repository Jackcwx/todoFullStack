import { useQuery } from '@tanstack/react-query'
import { getTodos } from '../apis/apiClients'
import Todos from './Todos'

export default function TodoList() {
  const {
    data: todos,
    isPending,
    isError,
  } = useQuery({ queryKey: ['todos'], queryFn: () => getTodos() })

  if (isError) return <p> error... </p>

  if (isPending) return <p> loading... </p>

  return (
    <>
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos.map((todo, i) => {
          return (
            <Todos
              key={i}
              id={todo.id}
              task_details={todo.task_details}
              priority={todo.priority}
              completed={todo.completed}
            />
          )
        })}
      </ul>
    </>
  )
}
