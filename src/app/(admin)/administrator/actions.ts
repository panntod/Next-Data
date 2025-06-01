'use server'

import { createAdministrator, findAdministrator, removeAdministrator, updateAdministrator } from '@/query/administrator'
import { generateHash } from '@/lib/encryption'
import { getServerSession } from '@/lib/next-auth'
import { revalidatePath } from 'next/cache'
import { console } from 'inspector'

interface ServerActionResponse {
  success: boolean
  message: string
}

export async function upsertAdministrator(
  id: number | undefined | null,
  data: { name?: string; username?: string; email?: string; role?: string; password?: string }
): Promise<ServerActionResponse> {
  try {
    const session = await getServerSession()
    const currentAdministratorRole = session?.administrator?.role

    console.log('Current Administrator Role:', currentAdministratorRole)

    // if (data.role && currentAdministratorRole !== 'admin') return { success: false, message: 'Forbidden' }

    if (!id) {
      const { name, username, email, role, password } = data
      if (!name || !username || !email || !role || !password) return { success: false, message: 'Bad request' }

      const checknameExistence = await findAdministrator({ email })
      if (checknameExistence) return { success: false, message: 'Forbidden' }

      await createAdministrator({
        name,
        username,
        email,
        role,
        password: generateHash(password)
      })

      return { success: true, message: 'Sukses membuat administrator!' }
    }

    const administratorToUpdate = await findAdministrator({ id })
    if (!administratorToUpdate) return { success: false, message: 'Administrator tidak ditemukan!' }

    await updateAdministrator({ id }, data)

    revalidatePath('/admin/administrator')
    return { success: true, message: 'Sukses meng-update administrator!' }
  } catch (error) {
    console.log(error)
    return { success: false, message: 'Internal server error' }
  }
}

export async function deleteAdministrator(id: number): Promise<ServerActionResponse> {
  try {
    const session = await getServerSession()
    const loggedAdministrator = session?.administrator?.id
    if (session?.administrator?.role !== 'admin') return { success: false, message: 'Forbidden' }

    const administratorToDelete = await findAdministrator({ id })
    if (!administratorToDelete) return { success: false, message: 'Administrator tidak ditemukan!' }
    if (administratorToDelete.id === loggedAdministrator)
      return { success: false, message: 'You cant delete yourself dawg' }

    await removeAdministrator({ id })

    return { success: true, message: 'Berhasil menghapus administrator!' }
  } catch (error) {
    console.log(error)
    return { success: false, message: 'Terjadi kesalahan!' }
  }
}
