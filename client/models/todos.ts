export interface TodoData {
  taskDetails: string
  priority: string
  completed: boolean
}

export interface Todo extends TodoData {
  id: number
}
