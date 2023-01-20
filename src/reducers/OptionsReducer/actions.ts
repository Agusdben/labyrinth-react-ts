import { Dimension } from '../../types'

export type OPTIONS_ACTIONS =
  | { type: 'reset' }
  | { type: 'set_player_color'; payload: string }
  | { type: 'set_resolution'; payload: Dimension }
