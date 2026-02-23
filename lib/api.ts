import axios from "axios"
import { authClient } from "./services/auth-services"

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
})

// Attach auth token to every request
api.interceptors.request.use(async (config) => {
    const { data: session } = await authClient.getSession()
    if (session?.session?.token) {
        config.headers.Authorization = `Bearer ${session.session.token}`
    }
    return config
})