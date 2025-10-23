// src/features/auth/sign-up/index.tsx
import { Link, useNavigate } from '@tanstack/react-router'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { AuthLayout } from '../auth-layout'
import { SignUpForm } from './components/sign-up-form'
import { useSignUp } from './hook'

export function SignUp() {
  const signUp = useSignUp()
  const navigate = useNavigate()

  async function handleSubmit(v: { email: string; password: string }) {
    await signUp.mutateAsync(v)
    navigate({ to: '/' })
  }
  return (
    <AuthLayout>
      <Card className='gap-4'>
        <CardHeader>
          <CardTitle className='text-lg tracking-tight'>계정 생성</CardTitle>
          <CardDescription>
            이메일과 패스워드를 입력해 계정을 생성후 로그인하세요. <br />
            이미 계정을 가지고 있으십니까 ?{' '}
            <Link
              to='/sign-in'
              className='hover:text-primary underline underline-offset-4'
            >
              Sign In
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignUpForm
            onSubmitForm={handleSubmit}
            isSubmitting={signUp.isPending}
          />
        </CardContent>
        <CardFooter>
          <p className='text-muted-foreground px-8 text-center text-sm'>
            By creating an account, you agree to our{' '}
            <a
              href='/terms'
              className='hover:text-primary underline underline-offset-4'
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              href='/privacy'
              className='hover:text-primary underline underline-offset-4'
            >
              Privacy Policy
            </a>
            .
          </p>
        </CardFooter>
      </Card>
    </AuthLayout>
  )
}
