export enum LabyrinthPieces {
  path = 0,
  wall = 1,
  player = 2,
  exit = 3
}

export enum PlayerMoveDirections {
  // arrows
  up = 'ArrowUp',
  down = 'ArrowDown',
  left = 'ArrowLeft',
  right = 'ArrowRight'
}

export interface ArrowSvgProps {
  className?: string
  stroke?: string
}

export interface Level {
  level: number
  playerSpawn: { x: number; y: number }
  exit: { x: number; y: number }
  map: Array<Array<number>>
}

export interface DrawParams {
  x: number
  y: number
  cellDimension: { width: number; height: number }
}

export interface GameState {
  context: CanvasRenderingContext2D | null
  level: number
  board: { width: number; height: number }
  cell: { width: number; height: number }
  player: { width: number; height: number; color: string; x: number; y: number }
  labyrinth: {
    cols: number
    rows: number
    map: Array<Array<number>>
    exit: { x: number; y: number }
    wallColor: string
    pathColor: string
  }
  loading: boolean
}
