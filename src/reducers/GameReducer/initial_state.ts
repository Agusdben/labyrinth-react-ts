import { GameState, Windows } from '../../types'

const INITIAL_STATE: GameState = {
  context: null,
  level: -1,
  window: { actual: Windows.menu, history: [Windows.menu] },
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
    playerSpawn: { x: 0, y: 0 },
    wallColor: '#000',
    pathColor: '#fa0',
    exitColor: '#f00'
  },

  loading: true
}

export default INITIAL_STATE
