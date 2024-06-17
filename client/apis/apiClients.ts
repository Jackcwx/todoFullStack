import request from 'superagent'
import { Todo, TodoData } from '../models/todos'

const rootUrl = '/api/v1/todos'

export async function getTodos(): Promise<Todo[]> {
  const res = await request.get(rootUrl)
  return res.body
}

export async function getTodoById(id: number): Promise<Todo> {
  const res = await request.get(`${rootUrl}/${id}`)
  return res.body
}

export async function addTodo(newTodo: TodoData): Promise<void> {
  await request.post(rootUrl).send(newTodo)
}
