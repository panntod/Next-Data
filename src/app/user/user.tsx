'use client'

import React, { useState } from 'react'
import { Button } from '@/components/Button'
import Input from '@/components/Input/component/Input'
import { Typography } from '@/components/Typography'
import Pagination from '@/components/Pagination/component/Pagination' // Assuming this is the pagination component
import { createUser, updateUser, deleteUser, restoreUser } from './actions' // Import Server Actions
import { Prisma } from '@prisma/client' // Import Prisma namespace for types
import { useRouter, useSearchParams } from 'next/navigation'

// Define User type using Prisma's generated type
type User = Prisma.userGetPayload<Record<string, never>> // Corrected type for ESLint

interface PaginationMetaData {
  currentPage: number
  totalPage: number
  totalData: number
  quantity: number
}

interface GetUsersResponse {
  messages: string
  data: User[]
  metaData: PaginationMetaData
}

const UsersPage = ({ user }: { user: GetUsersResponse }) => {
  // State for Update User form (Create and Delete will use form actions directly)
  const searchParams = useSearchParams()
  const router = useRouter()
  const [updateUserId, setUpdateUserId] = useState<string>('')
  const [updateName, setUpdateName] = useState<string>('')
  const [updateEmail, setUpdateEmail] = useState<string>('')
  const [deleteUserId, setDeleteUserId] = useState<string>('')
  const [restoreUserId, setRestoreUserId] = useState<string>('')

  const handlePageChange = (page: number) => {
    // Update the URL with the new page number
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', page.toString())
    router.push(`?${params.toString()}`)
  }

  // Handle form submission for Create User
  const handleCreateFormSubmit = async (formData: FormData) => {
    const result = await createUser(formData)
    if (result.messages !== 'success create user') {
      console.error('Failed to create user:', result.messages)
    }
    // fetchUsers is called automatically by revalidatePath in the action
  }

  // Handle form submission for Update User
  const handleUpdateFormSubmit = async (formData: FormData) => {
    const result = await updateUser(formData)
    if (result.messages !== 'success update user') {
      console.error('Failed to update user:', result.messages)
    } else {
      setUpdateUserId('')
      setUpdateName('')
      setUpdateEmail('')
    }
  }

  // Handle form submission for Delete User
  const handleDeleteFormSubmit = async (formData: FormData) => {
    const result = await deleteUser(formData)
    if (result.messages !== 'success delete user') {
      console.error('Failed to delete user:', result.messages)
    } else {
      setDeleteUserId('')
    }
  }
  const handleRestoreFormSubmit = async (formData: FormData) => {
    const result = await restoreUser(formData)
    if (result.messages !== 'success restore user') {
      console.error('Failed to restore user:', result.messages)
    } else {
      setRestoreUserId('')
    }
  }

  return (
    <div className='container mx-auto p-4'>
      <Typography>User Management</Typography>

      {/* Create User Section */}
      <div className='mb-8'>
        <Typography>Create User</Typography>
        <form action={handleCreateFormSubmit} className='flex gap-4'>
          {' '}
          {/* Use form action */}
          <Input
            placeholder='Name'
            name='name' // Add name attribute for FormData
            required
          />
          <Input
            placeholder='Email'
            name='email' // Add name attribute for FormData
            type='email'
            required
          />
          <Button type='submit'>Create</Button> {/* Use type='submit' */}
        </form>
      </div>

      {/* Update User Section */}
      <div className='mb-8'>
        <Typography>Update User</Typography>
        <form action={handleUpdateFormSubmit} className='flex gap-4'>
          {' '}
          {/* Use form action */}
          <Input
            placeholder='User ID'
            name='id' // Add name attribute for FormData
            value={updateUserId}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUpdateUserId(e.target.value)}
            required
          />
          <Input
            placeholder='New Name'
            name='name' // Add name attribute for FormData
            value={updateName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUpdateName(e.target.value)}
          />
          <Input
            placeholder='New Email'
            name='email' // Add name attribute for FormData
            type='email'
            value={updateEmail}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUpdateEmail(e.target.value)}
          />
          <Button type='submit'>Update</Button> {/* Use type='submit' */}
        </form>
      </div>

      {/* Delete User Section */}
      <div className='mb-8'>
        <Typography>Delete User</Typography>
        <form action={handleDeleteFormSubmit} className='flex gap-4'>
          {' '}
          {/* Use form action */}
          <Input
            placeholder='User ID'
            name='id' // Add name attribute for FormData
            value={deleteUserId}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDeleteUserId(e.target.value)}
            required
          />
          <Button type='submit'>Delete</Button> {/* Use type='submit' */}
        </form>
      </div>

      {/* Restore User Section */}
      <div className='mb-8'>
        <Typography>Restore User</Typography>
        <form action={handleRestoreFormSubmit} className='flex gap-4'>
          {' '}
          {/* Use form action */}
          <Input
            placeholder='User ID'
            name='id' // Add name attribute for FormData
            value={restoreUserId}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRestoreUserId(e.target.value)}
            required
          />
          <Button type='submit'>Restore</Button> {/* Use type='submit' */}
        </form>
      </div>

      {/* Get All Users Section */}
      <div>
        <Typography>All Users</Typography>

        <div>
          <ul>
            {user.data.length === 0 ? (
              <li>No users found</li>
            ) : (
              <>
                {user.data.map(user => (
                  <li key={user.id}>
                    {user.name} ({user.email})
                  </li>
                ))}
              </>
            )}
          </ul>
          {user.metaData && (
            <Pagination
              currentPage={user.metaData.currentPage}
              totalPages={user.metaData.totalPage}
              onChange={handlePageChange}
              hasPrevPage={
                user.metaData.currentPage > user.metaData.totalPage ||
                user.metaData.currentPage == user.metaData.totalPage
              }
              hasNextPage={user.metaData.currentPage < user.metaData.totalPage}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default UsersPage
