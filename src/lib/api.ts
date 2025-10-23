// src/lib/api.ts
import axios from 'axios'

export const API_BASE = import.meta.env.VITE_API_BASE as string

export const http = axios.create({
  baseURL: API_BASE,
  withCredentials: true, // refresh 쿠키
  headers: { 'Content-Type': 'application/json' },
})

export const api = {
  post: <T>(path: string, body?: unknown) =>
    http.post<T>(path, body).then((r) => r.data),
  get: <T>(path: string) => http.get<T>(path).then((r) => r.data),
}
