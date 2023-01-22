import UserForm from '../../../../components/UserForm'
import useUser from '../../../../hooks/useUser'

const UserRegistration = () => {
  const { setUser } = useUser()
  return (
    <div className='text-center'>
      <UserForm onSubmit={setUser} />
    </div>
  )
}

export default UserRegistration
