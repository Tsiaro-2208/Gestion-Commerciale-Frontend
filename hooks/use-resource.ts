import { BaseService } from "@/lib/services/base.service"
import { useQuery, useMutation, useQueryClient, UseQueryOptions } from "@tanstack/react-query"

type ID = string | number

interface UseResourceOptions<T> {
    queryKey: string
    service: BaseService<T>
    queryOptions?: Omit<UseQueryOptions<T[], Error>, 'queryKey' | 'queryFn'>
}

export function useResource<T>({ queryKey, service, queryOptions }: UseResourceOptions<T>) {
    const queryClient = useQueryClient()

    // GET ALL
    const query = useQuery<T[], Error>({
        queryKey: [queryKey],
        queryFn: () => service.getAll(),
        ...queryOptions,
    })

    // CREATE
    const createMutation = useMutation({
        mutationFn: (data: Partial<T>) => service.create(data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [queryKey] }),
    })

    // UPDATE
    const updateMutation = useMutation({
        mutationFn: ({ id, data }: { id: ID; data: Partial<T> }) => service.update(id, data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [queryKey] }),
    })

    // DELETE
    const deleteMutation = useMutation({
        mutationFn: (id: ID) => service.delete(id),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [queryKey] }),
    })

    return {
        ...query,
        create: createMutation.mutateAsync,
        update: updateMutation.mutateAsync,
        delete: deleteMutation.mutateAsync,
    }
}