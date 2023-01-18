import { useCallback, useEffect, useReducer, useRef } from 'react'
import { gameReducer } from '../reducers/GameReducer/gameReducer'
import INITIAL_STATE from '../reducers/GameReducer/initial_state'
import LEVELS from '../constants/levels'
import {
  DrawParams,
  GameState,
  LabyrinthPieces,
  PlayerMoveDirections
} from '../types/index'

interface Props {
  width: number
  height: number
}
const useGame = ({ width, height }: Props) => {
  const [gameState, dispath] = useReducer(gameReducer, INITIAL_STATE)

  const canvasRef = useRef<HTMLCanvasElement>(null)

  const drawWall = ({ x, y, cellDimension }: DrawParams) => {
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
  }

  const drawPath = ({ x, y, cellDimension }: DrawParams) => {
    const { labyrinth, context } = gameState
    if (!context) return

    context.fillStyle = labyrinth.pathColor
    context.fillRect(
      cellDimension.width * x,
      cellDimension.height * y,
      cellDimension.width,
      cellDimension.height
    )
  }

  const drawExit = ({ x, y, cellDimension }: DrawParams) => {
    const { labyrinth, context } = gameState
    if (!context) return

    context.fillStyle = '#f00'
    context.fillRect(
      cellDimension.width * x,
      cellDimension.height * y,
      cellDimension.width,
      cellDimension.height
    )
  }

  const drawPlayer = ({ x, y, cellDimension }: DrawParams) => {
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
  }

  const handleDrawLevel = () => {
    const { labyrinth, cell } = gameState
    const { map, rows, cols } = labyrinth
    console.log({ cell })
    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        switch (map[row][col]) {
          case LabyrinthPieces.wall:
            drawWall({ x: col, y: row, cellDimension: cell })
            continue
          case LabyrinthPieces.path:
            drawPath({ x: col, y: row, cellDimension: cell })
            continue
          case LabyrinthPieces.player:
            drawPlayer({ x: col, y: row, cellDimension: cell })
            continue
          case LabyrinthPieces.exit:
            drawExit({ x: col, y: row, cellDimension: cell })
        }
      }
    }
  }

  const playerMoveUp = () => {
    const { player, labyrinth, cell } = gameState
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
    drawPath({ x: playerX, y: playerY, cellDimension: cell })
    drawPlayer({ x: playerX, y: nextYpostion, cellDimension: cell })
  }

  const playerMoveLeft = () => {
    const { player, labyrinth, cell } = gameState
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
    drawPath({ x: playerX, y: playerY, cellDimension: cell })
    drawPlayer({ x: nextXposition, y: playerY, cellDimension: cell })
  }

  const playerMoveDown = () => {
    const { player, labyrinth, cell } = gameState
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
    drawPath({ x: playerX, y: playerY, cellDimension: cell })
    drawPlayer({ x: playerX, y: nextYpostion, cellDimension: cell })
  }

  const playerMoveRight = () => {
    const { player, labyrinth, cell } = gameState
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
    drawPath({ x: playerX, y: playerY, cellDimension: cell })
    drawPlayer({ x: nextXposition, y: playerY, cellDimension: cell })
  }

  const handlePlayerMove = (direction: PlayerMoveDirections) => {
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
  }

  const setCellDimension = () => {
    dispath({
      type: 'set_cell',
      payload: {
        width: gameState.board.width / gameState.labyrinth.cols,
        height: gameState.board.height / gameState.labyrinth.rows
      }
    })
  }

  useEffect(() => {
    if (!canvasRef.current) return
    const context = canvasRef.current.getContext('2d')
    dispath({ type: 'set_context', payload: context })
    dispath({ type: 'set_board', payload: { width, height } })
    setCellDimension()
    dispath({ type: 'set_loading', payload: false })
  }, [canvasRef.current])

  useEffect(() => {
    if (!gameState.context) return
    handleDrawLevel()
  }, [gameState.loading, gameState.cell, gameState.labyrinth])

  useEffect(() => {
    const handleKeyDown = (evt: KeyboardEvent) => {
      switch (evt.key) {
        case PlayerMoveDirections.up:
          handlePlayerMove(PlayerMoveDirections.up)
          break
        case PlayerMoveDirections.down:
          handlePlayerMove(PlayerMoveDirections.down)
          break
        case PlayerMoveDirections.left:
          handlePlayerMove(PlayerMoveDirections.left)
          break
        case PlayerMoveDirections.right:
          handlePlayerMove(PlayerMoveDirections.right)
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [gameState.player, gameState.cell])

  const setNewLabyrinth = (level: number) => {
    const { labyrinth, player } = gameState
    const nextLevel = { ...LEVELS[level] }

    const nextLabyrinth: GameState['labyrinth'] = {
      ...labyrinth,
      cols: nextLevel.map[0].length,
      rows: nextLevel.map.length,
      map: nextLevel.map,
      exit: nextLevel.exit
    }

    const newPlayer: GameState['player'] = {
      ...player,
      x: nextLevel.playerSpawn.x,
      y: nextLevel.playerSpawn.y
    }

    dispath({ type: 'set_labyrinth', payload: nextLabyrinth })
    dispath({ type: 'set_player', payload: newPlayer })
  }

  const setNextLevel = () => {
    const { level } = gameState
    const numberOfLeves = LEVELS.length
    const nextLevel = level + 1
    if (nextLevel >= numberOfLeves) return
    dispath({ type: 'increase_level', payload: level })
    setNewLabyrinth(nextLevel)
  }

  const isPlayerInExitPosition = () => {
    const { player, labyrinth } = gameState
    const { exit } = labyrinth
    return player.x === exit.x && player.y === exit.y
  }

  useEffect(() => {
    const isLevelCompleted = isPlayerInExitPosition()
    if (!isLevelCompleted) return
    setNextLevel()
  }, [gameState.player])

  return {
    canvasRef,
    level: gameState.level,
    handlePlayerMove
  }
}

export default useGame
