import { getServerSession } from '@/lib/next-auth'
import { redirect } from 'next/navigation'
import { FaArrowLeft } from 'react-icons/fa6'
import LoginForm from './_components/form'
import { ButtonLink } from '@/components/Button'

export default async function Login() {
  const session = await getServerSession()
  if (session) return redirect('/administrator')

  return (
    <div className=' p-6 rounded-lg shadow-md'>
      <ButtonLink href='/' className='flex'>
        <FaArrowLeft className='mr-1' /> Kembali
      </ButtonLink>
      <LoginForm />
    </div>
  )
}
