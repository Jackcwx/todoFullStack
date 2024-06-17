import React, { useState } from 'react'
import useAddTodo from '../apis/hooks/useAddTodo'
import { Todo } from '../models/todos'

export default function TodoForm() {
  const [newTodo, setNewTodo] = useState('')
  const addTodo = useAddTodo()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (newTodo.length < 1) return

    const todo: Todo = {
      id: NaN,
      task_details: newTodo,
      priority: 'high',
      completed: false,
    }
    await addTodo.mutateAsync(todo)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          autoFocus={true}
          type="text"
          placeholder="add a new agenda item"
          value={newTodo}
          onChange={handleChange}
        />
      </form>
    </>
  )
}
