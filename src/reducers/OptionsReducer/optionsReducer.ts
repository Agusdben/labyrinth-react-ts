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
    case 'set_resolution': {
      return {
        ...state,
        resolution: action.payload
      }
    }
    case 'set_music_volume': {
      return {
        ...state,
        sounds: {
          ...state.sounds,
          music: action.payload
        }
      }
    }
    case 'set_effects_volume': {
      return {
        ...state,
        sounds: {
          ...state.sounds,
          effects: action.payload
        }
      }
    }
    default:
      return {
        ...state
      }
  }
}
