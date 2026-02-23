import { api } from "@/lib/api"
import { authClient } from "./auth-services"

type ID = string | number

export class BaseService<T> {
  connectedUserId = authClient.useSession().data?.user.id
  constructor(private endpoint: string) { }

  // GET /entities
  async getAll(): Promise<T[]> {
    const res = await api.get<T[]>(this.endpoint)
    return res.data
  }

  // GET /entities/:id
  async getOne(id: ID): Promise<T> {
    const res = await api.get<T>(`${this.endpoint}/${id}`)
    return res.data
  }

  // POST /entities
  async create(data: Partial<T>): Promise<T> {
    const res = await api.post<T>(this.endpoint, { ...data, userId: this.connectedUserId })
    return res.data
  }

  // PUT /entities/:id
  async update(id: ID, data: Partial<T>): Promise<T> {
    const res = await api.put<T>(`${this.endpoint}/${id}`, data)
    return res.data
  }

  // DELETE /entities/:id
  async delete(id: ID): Promise<void> {
    await api.delete(`${this.endpoint}/${id}`)
  }

  async getByType(type: any): Promise<T[]> {
    const res = await api.get<T[]>(`${this.endpoint}/type/${type}`)
    return res.data
  }
}