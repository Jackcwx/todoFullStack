import { Todo } from '../models/todos'

export default function Todos(todo: Todo) {
  return (
    <div>
      <span>
        <p>{todo.task_details}</p>
        <p>{todo.priority}</p>
      </span>
      <label htmlFor="label">
        <button> </button>
      </label>
    </div>
  )
}
