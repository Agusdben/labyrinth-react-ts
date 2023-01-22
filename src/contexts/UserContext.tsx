import { createContext, useReducer } from 'react'
import { UserActions } from '../reducers/UserReducer/actions'
import USER_INITIAL_STATE from '../reducers/UserReducer/userInitialState'
import userReducer from '../reducers/UserReducer/userReducer'
import { User } from '../types'

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

const UserContextProvider = ({ children }: Props) => {
  const [userState, dispatch] = useReducer(userReducer, USER_INITIAL_STATE)
  return (
    <UserContext.Provider value={{ userState, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
