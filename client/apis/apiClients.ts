import request from 'superagent'
import { Todo } from '../models/todos'

const rootUrl = '/api/v1/todos'

export async function getTodos(): Promise<Todo[]> {
  const res = await request.get(rootUrl)
  return res.body
}

export async function getTodoById(id: number): Promise<Todo> {
  const res = await request.get(`${rootUrl}/${id}`)
  return res.body
}

export async function addTodo(newTodo: Todo): Promise<void> {
  await request.post(rootUrl).send(newTodo)
}

export async function completeTodo(id: number): Promise<void> {
  const res = await request.patch(`${rootUrl}/completed/${id}`)
  return res.body
}

export async function incompleteTodo(id: number): Promise<void> {
  const res = await request.patch(`${rootUrl}/not-completed/${id}`)
  return res.body
}

export async function delTodo(id: number): Promise<void> {
  await request.delete(`${rootUrl}/${id}`)
}
