import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { User } from '../types'

const useUser = () => {
  const { userState, dispatch } = useContext(UserContext)

  const setUsername = (username: User['username']) => {
    dispatch({ type: 'set_username', payload: username })
  }

  const setUser = (user: User) => {
    dispatch({ type: 'set_user', payload: user })
  }

  return {
    user: userState,
    setUsername,
    setUser
  }
}

export default useUser
