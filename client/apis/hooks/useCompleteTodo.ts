import { useMutation, useQueryClient } from '@tanstack/react-query'
import { completeTodo } from '../apiClients'

export default function useCompleteTodo() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (id: number) => {
      await completeTodo(id)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}
