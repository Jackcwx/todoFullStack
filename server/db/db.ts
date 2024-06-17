import connection from './connection'
import { Todo } from '../../client/models/todos'

const db = connection

export function getTodos(): Promise<Todo[]> {
  return db('todos').select()
}

export function getTodoById(id: number): Promise<Todo> {
  return db('todos').where({ id }).select().first()
}

export function addTodo(newTodo: Todo): Promise<void> {
  return db('todos').insert(newTodo)
}

export function updatedAsCompleted(id: number): Promise<void> {
  return db('todos').where({ id }).update('completed', true)
}

export function updatedAsNotCompleted(id: number): Promise<void> {
  return db('todos').where({ id }).update('completed', false)
}

export function deleteTodo(id: number): Promise<void> {
  return db('todos').where({ id }).del()
}
