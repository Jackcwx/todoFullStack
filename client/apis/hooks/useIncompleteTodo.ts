import { useMutation, useQueryClient } from '@tanstack/react-query'
import { incompleteTodo } from '../apiClients'

export default function () {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (id: number) => {
      incompleteTodo(id)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}
