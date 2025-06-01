'use client'
import { Button } from '@/components/Button'

import { LoginSchema } from '@/lib/validator/login'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Input from '@/components/Input/component/Input'

export default function LoginForm() {
  const [loading, setLoading] = useState(false)

  const form = useForm({
    resolver: yupResolver(LoginSchema)
  })

  const router = useRouter()

  const onSubmit = form.handleSubmit(async values => {
    const toastId = toast.loading('Loading...')
    setLoading(true)

    try {

      const res = await signIn('credentials', {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl: '/'
      })



      if (res?.error) {
        setLoading(false)
        return toast.error(res.error === 'CredentialsSignin' ? 'Username atau password salah!' : 'Terjadi kesalahan', {
          id: toastId
        })
      }
      toast.success('Berhasil login!', { id: toastId })
      router.push('/administrator')
    } catch (error) {
      toast.error('Terjadi kesalahan', { id: toastId })
    }
  })

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50'>
      <form onSubmit={onSubmit} className='mt-14 w-full max-w-md p-6 bg-white rounded-lg shadow-md'>
        <h2 className='text-center mb-14'>Masuk ke Akun Anda</h2>

        <div className='flex flex-col gap-6 mb-14'>
          <Input
            label='Email'
            type='email'
            placeholder='Masukkan Email'
            {...form.register('email')}
            aria-label='Email'
            required
          />
          <Input
            label='Password'
            type='password'
            placeholder='Masukkan kata sandi'
            {...form.register('password')}
            aria-label='Password'
            required
          />
        </div>

        <Button variant='primary' type='submit' className='w-full justify-center' disabled={loading}>
          {loading ? 'Loading...' : 'Masuk'}
        </Button>
      </form>
    </div>
  )
}
