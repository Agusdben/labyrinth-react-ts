import { Music } from '../../types'
import { MUSIC_ACTIONS } from './actions'
import MUSIC_INITIAL_STATE from './musicInitialState'

export const musicReducer = (state: Music, action: MUSIC_ACTIONS): Music => {
  switch (action.type) {
    case 'reset':
      return MUSIC_INITIAL_STATE
    case 'set_song':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
