import { User } from '../../types'

export type UserActions =
  | { type: 'reset' }
  | { type: 'set_user'; payload: User }
  | { type: 'set_username'; payload: User['username'] }
