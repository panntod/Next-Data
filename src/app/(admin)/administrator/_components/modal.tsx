'use client'
import { administrator } from '@prisma/client'
import { Dispatch, SetStateAction, useState } from 'react'
import { FaX } from 'react-icons/fa6'

import { Button } from '@/components/Button'
import { CreateAdministratorSchema, UpdateAdministratorSchema } from '@/lib/validator/administrator'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { upsertAdministrator } from '../actions'
import { Modal } from '@/components/Modal'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Input from '@/components/Input/component/Input'

export default function AdminModal({
  setIsOpenModal,
  data
}: {
  setIsOpenModal: Dispatch<SetStateAction<boolean>> // Needed for closing the modal
  data?: administrator | null
}) {
  const [loading, setLoading] = useState(false)
  const form = useForm({
    defaultValues: {
      name: data?.name,
      username: data?.username,
      email: data?.email,
      password: '',
      role: 'admin'
    },
    resolver: yupResolver(data ? UpdateAdministratorSchema : CreateAdministratorSchema)
  })
  const router = useRouter()

  const onSubmit = form.handleSubmit(async values => {
    setLoading(true)
    const toastId = toast.loading('Loading...')
    const result = await upsertAdministrator(data?.id, values)

    console.log('Result:', result)

    if (!result.success) {
      setLoading(false)
      return toast.error(result.message, { id: toastId })
    }

    toast.success(result.message, { id: toastId })
    setIsOpenModal(false)
    setLoading(false)
    router.refresh()
  })

  return (
    <Modal isOpen={true} closeable={false}>
      <form onSubmit={onSubmit}>
        <div className='flex items-center justify-between border-b p-4 md:p-5'>
          <h3>Administrator Data</h3>
          <button
            className='ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 transition-all hover:bg-gray-200 hover:text-gray-900'
            onClick={() => setIsOpenModal(false)}
            type='button'
          >
            <FaX size={16} />
          </button>
        </div>
        <div className='space-y-4 p-4 md:p-5'>
          <Input
            type='text'
            label='Name'
            placeholder='John Doe'
            // errorMessage={form.formState.errors.name?.message}
            {...form.register('name')}
          />
          <Input
            type='text'
            label='Username'
            placeholder='John Doe'
            // errorMessage={form.formState.errors.name?.message}
            {...form.register('username')}
          />
          <Input
            type='text'
            label='Email'
            placeholder='xx@smktelkom-mlg.sch.id'
            // errorMessage={form.formState.errors.email?.message}
            {...form.register('email')}
          />
          <Input
            type='text'
            label='Role'
            placeholder='xx@smktelkom-mlg.sch.id'
            // errorMessage={form.formState.errors.role?.message}
            {...form.register('role')}
          />
          <Input
            type='password'
            label='Password'
            placeholder='**********'
            // errorMessage={form.formState.errors.password?.message}
            {...form.register('password')}
          />
        </div>
        <div className='flex items-center justify-end rounded-b border-t border-gray-200 p-4 md:p-5'>
          <Button variant={'primary'} type='submit' disabled={loading}>
            Kirim
          </Button>
        </div>
      </form>
    </Modal>
  )
}
