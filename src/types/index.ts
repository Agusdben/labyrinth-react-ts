export enum LabyrinthPieces {
  path = 0,
  wall = 1,
  player = 2,
  exit = 3
}

export enum PlayerMoveDirections {
  up = 'ArrowUp',
  down = 'ArrowDown',
  left = 'ArrowLeft',
  right = 'ArrowRight'
}

export interface User {
  username: string
}

export enum LocalStorage {
  savedGame = 'savedGame',
  user = 'user',
  options = 'options'
}

export interface Modal {
  isOpen: boolean
  title: string
  handleModal: () => void
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

export interface Options {
  player: {
    color: string
  }
  resolution: Dimension
  sounds: {
    effects: number
    music: number
  }
}

export interface GameState {
  context: CanvasRenderingContext2D | null
  level: number
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
