import { GameState } from '../../types'

const GAME_INITIAL_STATE: GameState = {
  context: null,
  level: -1,
  board: { width: 0, height: 0 },
  cell: { width: 0, height: 0 },
  player: {
    width: 0,
    height: 0,
    color: '#00f',
    x: 0,
    y: 0,
    offset: { x: 0, y: 0 }
  },

  labyrinth: {
    cols: 0,
    rows: 0,
    map: [],
    exit: { x: 0, y: 0 },
    playerSpawn: { x: 0, y: 0 }
  },

  loading: true
}

export default GAME_INITIAL_STATE
