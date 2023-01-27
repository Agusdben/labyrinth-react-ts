import { createContext, useReducer, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserActions } from '../reducers/UserReducer/actions'
import USER_INITIAL_STATE from '../reducers/UserReducer/userInitialState'
import userReducer from '../reducers/UserReducer/userReducer'
import { LocalStorage, User } from '../types'

interface UserContext {
  userState: User
  dispatch: React.Dispatch<UserActions>
}

export const UserContext = createContext<UserContext>({
  userState: USER_INITIAL_STATE,
  dispatch: () => {}
})

interface Props {
  children: React.ReactNode
}

const initUserState = (): User => {
  const storedUser = localStorage.getItem(LocalStorage.user)
  return storedUser ? JSON.parse(storedUser) : USER_INITIAL_STATE
}

const UserContextProvider = ({ children }: Props) => {
  const [userState, dispatch] = useReducer(userReducer, initUserState())
  const navigate = useNavigate()

  useEffect(() => {
    if (!userState.username) navigate('/')
  }, [])

  return (
    <UserContext.Provider value={{ userState, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
