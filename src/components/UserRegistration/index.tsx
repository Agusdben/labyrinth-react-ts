import React from 'react'
import useUser from '../../hooks/useUser'
import { User } from '../../types'
import UserForm from '../UserForm'

const UserRegistration = () => {
  const { user, setUser } = useUser()

  return (
    <div>
      <UserForm onSubmit={setUser} />
    </div>
  )
}

export default UserRegistration
