// src/features/auth/sign-up/hooks.ts
import { useMutation } from '@tanstack/react-query'
import { useAuthStore } from '@/stores/auth-store'
import { AuthAPI } from './api'
import type { RegisterPayload } from './api'

// ✅ 이름 맞추기

export function useSignUp() {
  console.log('useSignUp 훅 호출') // 디버그용 로그
  const setAccessToken = useAuthStore((s) => s.auth.setAccessToken)
  const setUser = useAuthStore((s) => s.auth.setUser)
  return useMutation({
    mutationFn: (payload: RegisterPayload) => AuthAPI.register(payload), // ✅
    onSuccess: ({ accessToken, user }) => {
      setAccessToken(accessToken)
      setUser(user)
    },
  })
}
