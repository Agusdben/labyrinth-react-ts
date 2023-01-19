import { GameState } from '../../types'
import { GAME_ACTIONS } from './actions'
import INITIAL_STATE from './initial_state'

export const gameReducer = (state: GameState, action: GAME_ACTIONS) => {
  switch (action.type) {
    case 'reset':
      return {
        ...INITIAL_STATE
      }
    case 'set_labyrinth':
      return {
        ...state,
        labyrinth: action.payload
      }
    case 'set_loading':
      return {
        ...state,
        loading: action.payload
      }
    case 'set_board':
      return {
        ...state,
        board: action.payload
      }
    case 'set_context':
      return {
        ...state,
        context: action.payload
      }
    case 'set_player':
      return {
        ...state,
        player: action.payload
      }
    case 'set_cell':
      return {
        ...state,
        cell: action.payload
      }
    case 'set_level': {
      return {
        ...state,
        level: action.payload
      }
    }
    case 'set_window':
      return {
        ...state,
        window: action.payload
      }
    default:
      return state
  }
}
