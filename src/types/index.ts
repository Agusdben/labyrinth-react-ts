export enum LabyrinthPieces {
  path = 0,
  wall = 1,
  player = 2
}

export enum PlayerMoveDirections {
  // arrows | wasd
  up = 'ArrowUp',
  down = 'ArrowDown',
  left = 'ArrowLeft',
  right = 'ArrowRight'
}

export interface ArrowSvgProps {
  className?: string
  stroke?: string
}

export interface DrawParams {
  x: number
  y: number
  cellDimension: { width: number; height: number }
}
