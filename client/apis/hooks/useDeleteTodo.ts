import { useMutation, useQueryClient } from '@tanstack/react-query'
import { delTodo } from '../apiClients'

export default function useDeleteTodo() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (id: number) => {
      await delTodo(id)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}
