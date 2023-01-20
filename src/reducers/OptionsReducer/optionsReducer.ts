import { Options } from '../../types'
import { OPTIONS_ACTIONS } from './actions'
import OPTIONS_INITIAL_STATE from './optionsInitialState'

export const optionsReducer = (state: Options, action: OPTIONS_ACTIONS) => {
  switch (action.type) {
    case 'reset':
      return {
        ...OPTIONS_INITIAL_STATE
      }
    case 'set_player_color': {
      return { ...state, player: { color: action.payload } }
    }
    default:
      return {
        ...state
      }
  }
}
