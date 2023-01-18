import LEVELS from '../../constants/levels'
import { GameState } from '../../types'

const INITIAL_STATE: GameState = {
  context: null,
  level: 0,
  board: { width: 0, height: 0 },
  cell: { width: 0, height: 0 },
  player: {
    width: 0,
    height: 0,
    color: '#00f',
    x: LEVELS[0].playerSpawn.x,
    y: LEVELS[0].playerSpawn.y
  },
  labyrinth: {
    cols: LEVELS[0].map[0].length,
    rows: LEVELS[0].map.length,
    map: [...LEVELS[0].map],
    exit: LEVELS[0].exit,
    wallColor: '#000',
    pathColor: '#fa0'
  },
  loading: true
}

export default INITIAL_STATE
