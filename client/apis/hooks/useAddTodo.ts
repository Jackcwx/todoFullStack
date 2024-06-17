import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addTodo } from '../apiClients'
import { Todo } from '../../models/todos'

export default function useAddTodo() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (todo: Todo) => {
      await addTodo(todo)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}
