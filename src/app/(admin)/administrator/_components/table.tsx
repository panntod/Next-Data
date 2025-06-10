'use client'
import { useEffect, useState } from 'react'
import DataTable, { TableColumn } from 'react-data-table-component'
import { FaPencilAlt, FaRegTrashAlt } from 'react-icons/fa'
import { deleteAdministrator } from '../actions'
import { administrator } from '@prisma/client'
import { Button } from '@/components/Button'
import { useRouter } from 'next/navigation'
import AdminModal from './modal'

export default function AdministratorTable({ data }: { data: administrator[] }) {
  const [loader, setLoader] = useState(true)
  const [editModalData, setEditModalData] = useState<administrator | null>(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  const router = useRouter()

  const columns: TableColumn<administrator>[] = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable: false
    },
    {
      name: 'Name',
      selector: row => row.email,
      sortable: false
    },
    {
      name: 'Username',
      selector: row => row.username,
      sortable: false
    },
    {
      name: 'Role',
      selector: row => row.role,
      sortable: true
    },
    {
      name: 'Action',
      cell: row => (
        <div className='flex gap-2'>
          <Button
            onClick={() => editAdministrator(row)}
            title='Edit Administrator'
            className='me-2 rounded bg-blue-100 p-2.5 text-xs font-medium text-blue-800 transition-all hover:bg-blue-700 hover:text-white'
          >
            <FaPencilAlt />
          </Button>
          <Button
            onClick={() => deleteAction(row.id)}
            title='Delete Administrator'
            className='me-2 rounded bg-red-100 p-2.5 text-xs font-medium text-red-800 transition-all hover:bg-red-700 hover:text-white'
          >
            <FaRegTrashAlt />
          </Button>
        </div>
      )
    }
  ]

  // Edit administrator function
  function editAdministrator(data: administrator) {
    setEditModalData(data)
    setIsCreateModalOpen(false)
    setIsEditModalOpen(true)
  }

  // Create administrator function
  function createAdministrator() {
    setEditModalData(null)
    setIsEditModalOpen(false)
    setIsCreateModalOpen(true)
  }

  // Delete administrator function
  async function deleteAction(id: number) {
    if (!confirm('Anda yakin ingin menghapus administrator ini?')) return

    await deleteAdministrator(id)

    router.refresh()
  }

  useEffect(() => {
    setLoader(false)
  }, [])

  if (loader) return <div>Loading</div>

  return (
    <>
      <div className='mb-4 flex items-center gap-4'>
        <Button
          onClick={() => {
            createAdministrator()
          }}
        >
          Add administrator
        </Button>
      </div>

      <div className='rounded-md bg-white p-2'>
        {isEditModalOpen && <AdminModal setIsOpenModal={setIsEditModalOpen} data={editModalData} />}
        {isCreateModalOpen && <AdminModal setIsOpenModal={setIsCreateModalOpen} data={null} />}

        <DataTable columns={columns} data={data} pagination highlightOnHover />
      </div>
    </>
  )
}
