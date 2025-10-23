// src/features/auth/sign-up/api.ts
import { api } from '@/lib/api'

export type RegisterPayload = {
  email: string
  password: string
}

export type AuthUser = {
  id: number | string
  email: string
  role: string
}

export type RegisterResponse = {
  user: AuthUser
  accessToken: string
}

export const AuthAPI = {
  register: (payload: RegisterPayload) =>
    api.post<RegisterResponse>('/auth/register', payload),
}
