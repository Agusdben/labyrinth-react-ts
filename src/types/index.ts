export enum LabyrinthPieces {
  path = 0,
  wall = 1,
  player = 2,
  exit = 3
}

export enum Windows {
  menu = 'Menu',
  levels = 'Levels',
  labyrinth = 'Labyrinth',
  options = 'Options',
  how_to_play = 'How to play',
  change_player_color = 'Change Player Color'
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

export interface Window {
  actual: Windows
  history: Array<Windows>
}

export interface Options {
  player: {
    color: string
  }
}

export interface GameState {
  context: CanvasRenderingContext2D | null
  level: number
  window: Window
  board: Dimension
  cell: Dimension
  player: Player
  labyrinth: {
    cols: number
    rows: number
    map: Array<Array<number>>
    exit: Cords
    playerSpawn: Cords
  }
  loading: boolean
}
