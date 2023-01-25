import { User } from '../../types'
import { UserActions } from './actions'
import USER_INITIAL_STATE from './userInitialState'

const userReducer = (state: User, action: UserActions): User => {
  switch (action.type) {
    case 'reset':
      return USER_INITIAL_STATE
    case 'set_username': {
      return {
        ...state,
        username: action.payload
      }
    }
    case 'set_user': {
      return {
        ...action.payload
      }
    }
    default:
      return state
  }
}

export default userReducer
