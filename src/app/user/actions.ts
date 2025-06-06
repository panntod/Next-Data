'use server'

import { PrismaClient, Prisma } from '@prisma/client'
import { revalidatePath } from 'next/cache'

// Initialize Prisma Client (assuming no shared instance found)
const prisma = new PrismaClient()

interface PaginationMetaData {
  currentPage: number
  totalPage: number
  totalData: number
  quantity: number
}

interface GetUsersResponse {
  messages: string
  data: Prisma.userGetPayload<Record<string, never>>[] // Corrected type name and addressed ESLint warning
  metaData: PaginationMetaData
}

export async function getUsers({ page = 1, limit = 5 }: { page?: number; limit?: number }): Promise<GetUsersResponse> {
  try {
    const skip = (page - 1) * limit

    const users = await prisma.user.findMany({
      skip: skip,
      take: limit
    })

    const totalUsers = await prisma.user.count()
    const totalPages = Math.ceil(totalUsers / limit)

    const metaData: PaginationMetaData = {
      currentPage: page,
      totalPage: totalPages,
      totalData: totalUsers,
      quantity: users.length
    }

    return {
      messages: 'success get all user',
      data: users,
      metaData: metaData
    }
  } catch (error) {
    console.error('Error fetching users:', error)
    return {
      messages: 'Failed to get users',
      data: [],
      metaData: {
        currentPage: 1,
        totalPage: 0,
        totalData: 0,
        quantity: 0
      }
    }
  }
}

export async function createUser(formData: FormData) {
  try {
    const name = formData.get('name') as string
    const email = formData.get('email') as string

    const newUser = await prisma.user.create({
      data: {
        name,
        email
      }
    })

    revalidatePath('/user') // Revalidate the user page to show the new user
    return { messages: 'success create user', data: newUser }
  } catch (error) {
    console.error('Error creating user:', error)
    return { messages: 'Failed to create user', data: null }
  }
}

export async function updateUser(formData: FormData) {
  try {
    const id = formData.get('id') as string
    const name = formData.get('name') as string
    const email = formData.get('email') as string

    const updatedUser = await prisma.user.update({
      where: { id: id },
      data: {
        name,
        email
      }
    })

    revalidatePath('/user') // Revalidate the user page
    return { messages: 'success update user', data: updatedUser }
  } catch (error) {
    console.error('Error updating user:', error)
    return { messages: 'Failed to update user', data: null }
  }
}

export async function deleteUser(formData: FormData) {
  try {
    const id = formData.get('id') as string

    await prisma.user.delete({
      where: { id: id }
    })

    revalidatePath('/user') // Revalidate the user page
    return { messages: 'success delete user', data: null }
  } catch (error) {
    console.error('Error deleting user:', error)
    return { messages: 'Failed to delete user', data: null }
  }
}
