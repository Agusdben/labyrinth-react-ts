export enum LabyrinthPieces {
  path = 0,
  wall = 1,
  player = 2,
  exit = 3
}

export enum Windows {
  menu = 'Menu',
  levels = 'Levels',
  labyrinth = 'Labyrinth'
}

export enum PlayerMoveDirections {
  up = 'ArrowUp',
  down = 'ArrowDown',
  left = 'ArrowLeft',
  right = 'ArrowRight'
}

export enum LocalStorage {
  savedGame = 'savedGame'
}

export interface ArrowSvgProps {
  className?: string
  stroke?: string
}

export interface Cords {
  x: number
  y: number
}

export interface Dimension {
  width: number
  height: number
}

export interface Level {
  level: number
  playerSpawn: Cords
  exit: Cords
  map: Array<Array<number>>
}

export interface Player extends Dimension, Cords {
  color: string
  offset: Cords
}

export interface GameState {
  context: CanvasRenderingContext2D | null
  level: number
  window: Windows
  board: Dimension
  cell: Dimension
  player: Player
  labyrinth: {
    cols: number
    rows: number
    map: Array<Array<number>>
    exit: Cords
    wallColor: string
    pathColor: string
    exitColor: string
    playerSpawn: Cords
  }
  loading: boolean
}
