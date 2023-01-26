import { Music } from '../../types'

export type MUSIC_ACTIONS =
  | { type: 'reset' }
  | { type: 'set_song'; payload: Music }
