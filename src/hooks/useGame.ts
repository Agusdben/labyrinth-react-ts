import { useCallback, useEffect, useReducer, useRef } from 'react'
import levels from '../constants/levels'
import {
  DrawParams,
  LabyrinthPieces,
  PlayerMoveDirections
} from '../types/index'
interface Props {
  width: number
  height: number
}

interface GameState {
  context: CanvasRenderingContext2D | null
  level: number
  board: { width: number; height: number }
  cellDimension: { width: number; height: number }
  player: { width: number; height: number; color: string; x: number; y: number }
  labyrinth: {
    cols: number
    rows: number
    map: Array<Array<number>>
    wallColor: string
    pathColor: string
  }
  loading: boolean
}

type GAME_ACTIONS =
  | { type: 'reset' }
  | { type: 'set_board'; payload: GameState['board'] }
  | { type: 'set_player'; payload: GameState['player'] }
  | { type: 'set_labyrinth'; payload: GameState['labyrinth'] }
  | { type: 'set_context'; payload: GameState['context'] }
  | { type: 'set_loading'; payload: GameState['loading'] }

const gameReducer = (state: GameState, action: GAME_ACTIONS) => {
  switch (action.type) {
    case 'reset':
      return {
        ...INITIAL_STATE
      }
    case 'set_labyrinth':
      return {
        ...state,
        labyrinth: action.payload
      }
    case 'set_loading':
      return {
        ...state,
        loading: action.payload
      }
    case 'set_board':
      return {
        ...state,
        board: action.payload
      }
    case 'set_context':
      return {
        ...state,
        context: action.payload
      }
    case 'set_player':
      return {
        ...state,
        player: action.payload
      }
    default:
      return state
  }
}

const INITIAL_STATE: GameState = {
  context: null,
  level: 1,
  board: { width: 0, height: 0 },
  cellDimension: { width: 0, height: 0 },
  player: {
    width: 0,
    height: 0,
    color: '#00f',
    x: levels[1].playerSpawn.x,
    y: levels[1].playerSpawn.y
  },
  labyrinth: {
    cols: levels[1].map[0].length,
    rows: levels[1].map.length,
    map: [...levels[1].map],
    wallColor: '#000',
    pathColor: '#fa0'
  },
  loading: true
}

const useGame = ({ width, height }: Props) => {
  const [gameState, dispath] = useReducer(gameReducer, INITIAL_STATE)

  const canvasRef = useRef<HTMLCanvasElement>(null)

  const drawWall = useCallback(
    ({ x, y, cellDimension }: DrawParams) => {
      const { labyrinth, context } = gameState
      if (!context) return
      context.fillStyle = labyrinth.wallColor

      context.fillRect(
        cellDimension.width * x,
        cellDimension.height * y,
        cellDimension.width,
        cellDimension.height
      )

      // 3D effect
      context.fillStyle = '#555'
      context.fillRect(
        cellDimension.width * x,
        cellDimension.height * y,
        cellDimension.width / 2,
        cellDimension.height / 2
      )
    },
    [gameState.labyrinth, gameState.context]
  )

  const drawPath = useCallback(
    ({ x, y, cellDimension }: DrawParams) => {
      const { labyrinth, context } = gameState
      if (!context) return

      context.fillStyle = labyrinth.pathColor
      context.fillRect(
        cellDimension.width * x,
        cellDimension.height * y,
        cellDimension.width,
        cellDimension.height
      )
    },
    [gameState.labyrinth, gameState.context]
  )

  const drawPlayer = useCallback(
    ({ x, y, cellDimension }: DrawParams) => {
      const { labyrinth, context, player } = gameState
      if (!context) return
      // path color, becouse player is half width and half height of cellDimension
      context.fillStyle = labyrinth.pathColor
      context.fillRect(
        cellDimension.width * x,
        cellDimension.width * y,
        cellDimension.width,
        cellDimension.height
      )

      context.fillStyle = player.color
      const playerWidth = cellDimension.width / 2
      const playerHeight = cellDimension.height / 2

      // offset becose we need center player in cell
      const offset = {
        x: (cellDimension.width - playerWidth) / 2,
        y: (cellDimension.height - playerHeight) / 2
      }

      const playerX = cellDimension.width * x + offset.x
      const playerY = cellDimension.height * y + offset.y

      context.fillRect(playerX, playerY, playerWidth, playerHeight)
    },
    [gameState.labyrinth, gameState.context]
  )

  const handleDrawLevel = useCallback(() => {
    const { labyrinth, board } = gameState
    const { map, rows, cols } = labyrinth
    const { width: boardWidth, height: boardHeight } = board

    const cellDimension = {
      width: boardWidth / labyrinth.cols,
      height: boardHeight / labyrinth.rows
    }

    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        switch (map[row][col]) {
          case LabyrinthPieces.wall:
            drawWall({ x: col, y: row, cellDimension })
            continue
          case LabyrinthPieces.path:
            drawPath({ x: col, y: row, cellDimension })
            continue
          case LabyrinthPieces.player:
            drawPlayer({ x: col, y: row, cellDimension })
            continue
        }
      }
    }
  }, [gameState.labyrinth, gameState.context])

  const playerMoveUp = useCallback(() => {
    const { player, labyrinth } = gameState
    const { map } = labyrinth
    const { x: playerX, y: playerY } = player

    const nextYpostion = playerY - 1

    if (map[nextYpostion][playerX] === LabyrinthPieces.wall) return

    const newPlayer = {
      ...player,
      y: nextYpostion
    }

    map[playerY][playerX] = LabyrinthPieces.path
    map[nextYpostion][playerX] = LabyrinthPieces.player
    dispath({ type: 'set_player', payload: newPlayer })
    handleDrawLevel()
  }, [gameState.player, gameState.loading])

  const playerMoveLeft = useCallback(() => {
    const { player, labyrinth } = gameState
    const { map } = labyrinth
    const { x: playerX, y: playerY } = player

    const nextXposition = playerX - 1

    if (map[playerY][nextXposition] === LabyrinthPieces.wall) return

    map[playerY][playerX] = LabyrinthPieces.path
    map[playerY][nextXposition] = LabyrinthPieces.player

    const newPlayer = {
      ...player,
      x: nextXposition
    }

    dispath({ type: 'set_player', payload: newPlayer })
    handleDrawLevel()
  }, [gameState.player, gameState.loading])

  const playerMoveDown = useCallback(() => {
    const { player, labyrinth } = gameState
    const { map } = labyrinth
    const { x: playerX, y: playerY } = player

    const nextYpostion = playerY + 1

    if (map[nextYpostion][playerX] === LabyrinthPieces.wall) return

    const newPlayer = {
      ...player,
      y: nextYpostion
    }

    map[playerY][playerX] = LabyrinthPieces.path
    map[nextYpostion][playerX] = LabyrinthPieces.player
    dispath({ type: 'set_player', payload: newPlayer })
    handleDrawLevel()
  }, [gameState.player, gameState.loading])

  const playerMoveRight = useCallback(() => {
    const { player, labyrinth } = gameState
    const { map } = labyrinth
    const { x: playerX, y: playerY } = player

    const nextXposition = playerX + 1

    if (map[playerY][nextXposition] === LabyrinthPieces.wall) return

    map[playerY][playerX] = LabyrinthPieces.path
    map[playerY][nextXposition] = LabyrinthPieces.player

    const newPlayer = {
      ...player,
      x: nextXposition
    }

    dispath({ type: 'set_player', payload: newPlayer })
    handleDrawLevel()
  }, [gameState.player, gameState.loading])

  const handlePlayerMove = useCallback(
    (direction: PlayerMoveDirections) => {
      console.log({ direction })
      switch (direction) {
        case PlayerMoveDirections.up:
          playerMoveUp()
          break
        case PlayerMoveDirections.left:
          playerMoveLeft()
          break

        case PlayerMoveDirections.right:
          playerMoveRight()
          break

        case PlayerMoveDirections.down:
          playerMoveDown()
          break
      }
    },
    [gameState.player, gameState.loading]
  )

  useEffect(() => {
    if (!canvasRef.current) return
    const context = canvasRef.current.getContext('2d')
    dispath({ type: 'set_context', payload: context })
    dispath({ type: 'set_board', payload: { width, height } })
    dispath({ type: 'set_loading', payload: false })
  }, [canvasRef.current])

  useEffect(() => {
    if (!gameState.context) return
    handleDrawLevel()
  }, [gameState.loading])

  useEffect(() => {
    const handleKeyUp = (evt: KeyboardEvent) => {}

    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [gameState.loading])

  return {
    canvasRef,
    handlePlayerMove
  }
}

export default useGame
