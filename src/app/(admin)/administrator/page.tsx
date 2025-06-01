import { findAdministrators } from '@/query/administrator'
import AdministratorTable from './_components/table'

export default async function Administrators() {
  const administrators = await findAdministrators()

  return (
    <div>
      <div className='mb-5 flex items-center justify-between'>
        <div>
          <h2 className='font-semibold'>Administrator Managements</h2>
          <p>Change administrators roles and permission</p>
        </div>
      </div>

      <AdministratorTable data={administrators} />
    </div>
  )
}
