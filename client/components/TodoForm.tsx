import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { addTodo } from '../apis/apiClients'
import { TodoData } from '../models/todos'

export default function TodoForm() {
  const [newTodo, setNewTodo] = useState('')
  const [newPriority, setPriority] = useState('')

  const queryClient = useQueryClient()
  const addMutation = useMutation({
    mutationFn: (todo: TodoData) => addTodo(todo),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  const handlePriority = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriority(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    addMutation.mutate({
      task_details: newTodo,
      priority: newPriority,
      completed: false,
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Todo">Todo</label>
        <input onChange={handleChange} value={newTodo} id="todo"></input>
        <label htmlFor="Priority">Priority</label>
        <input
          onChange={handlePriority}
          value={newPriority}
          id="priority"
        ></input>
        <button>Submit</button>
      </form>
    </>
  )
}
