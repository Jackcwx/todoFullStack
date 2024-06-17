import React from 'react'
import useCompleteTodo from '../apis/hooks/useCompleteTodo'
import useIncompleteTodo from '../apis/hooks/useIncompleteTodo'
import { Todo } from '../models/todos'

export default function Todos(todo: Todo) {
  const completeTodo = useCompleteTodo()
  const incompleteTodo = useIncompleteTodo()

  const toggleTodoStatus = async (e: React.MouseEvent<HTMLInputElement>) => {
    const id = Number(e.currentTarget.id)

    if (e.currentTarget.checked === true) complete(id)

    if (e.currentTarget.checked === false) incomplete(id)
  }

  const complete = async (id: number) => {
    completeTodo.mutateAsync(id)
  }

  const incomplete = async (id: number) => {
    incompleteTodo.mutateAsync(id)
  }

  return (
    <>
      <li className={todo.completed ? 'completed' : ''}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onClick={toggleTodoStatus}
            defaultChecked={todo.completed ? true : false}
            id={`${todo.id}`}
          />
          <label htmlFor={`${todo.id}`} id={`${todo.id}`}>
            {todo.task_details}
          </label>
          <button className="destroy" aria-labelledby={`${todo.id}`}></button>
        </div>
      </li>
    </>
  )
}
