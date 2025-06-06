import { getUsers } from './actions'
import UsersPage from './user'
const UserPage = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const page = parseInt(searchParams.page || '1', 10)

  const users = await getUsers({ page })
  return <UsersPage user={users} />
}
export default UserPage
