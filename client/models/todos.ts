export interface TodoData {
  task_details: string
  priority: string
  completed: boolean
}

export interface Todo extends TodoData {
  id: number
}
