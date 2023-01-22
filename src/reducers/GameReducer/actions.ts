import { GameState } from '../../types'

export type GAME_ACTIONS =
  | { type: 'reset' }
  | { type: 'set_board'; payload: GameState['board'] }
  | { type: 'set_player'; payload: GameState['player'] }
  | { type: 'set_labyrinth'; payload: GameState['labyrinth'] }
  | { type: 'set_context'; payload: GameState['context'] }
  | { type: 'set_loading'; payload: GameState['loading'] }
  | { type: 'set_cell'; payload: GameState['cell'] }
  | { type: 'set_level'; payload: GameState['level'] }
