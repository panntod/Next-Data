import prisma from '../lib/prisma'
import { Prisma } from '@prisma/client'

export async function findAdministrators() {
  const administrators = await prisma.administrator.findMany({
    where: { deletedAt: null }
  })
  return administrators
}

export async function findAdministrator(filter: Prisma.administratorWhereUniqueInput) {
  const administrator = await prisma.administrator.findUnique({
    where: { ...filter }
  })
  return administrator
}

export async function createAdministrator(data: Prisma.administratorCreateInput) {
  const createdAdministrator = await prisma.administrator.create({ data })
  return createdAdministrator
}

export async function updateAdministrator(
  filter: Prisma.administratorWhereUniqueInput,
  data: Prisma.administratorUpdateInput
) {
  const updatedAdministrator = await prisma.administrator.update({
    where: { ...filter },
    data: { ...data, updatedAt: new Date() }
  })
  return updatedAdministrator
}

export async function removeAdministrator(filter: Prisma.administratorWhereUniqueInput) {
  const deletedAdministrator = await prisma.administrator.update({
    where: filter,
    data: { deletedAt: new Date() }
  })
  return deletedAdministrator
}
