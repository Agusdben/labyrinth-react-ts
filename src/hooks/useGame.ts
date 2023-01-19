import { useContext, useEffect, useRef } from 'react'
import LEVELS from '../constants/levels'
import {
  DrawParams,
  GameState,
  LabyrinthPieces,
  PlayerMoveDirections,
  Windows
} from '../types/index'

import { GameContext } from '../contexts/GameContext'
import useWindows from './useWindows'

interface Props {
  width: number
  height: number
}

const useGame = ({ width, height }: Props) => {
  const { gameState, dispatch } = useContext(GameContext)
  const { window } = gameState
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
    const { context } = gameState
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
    const { context, player } = gameState
    if (!context) return
    // drawPath becouse player is half width and half height of cellDimension
    drawPath({ x, y, cellDimension })

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

  const setCellDimension = () => {
    dispatch({
      type: 'set_cell',
      payload: {
        width: gameState.board.width / gameState.labyrinth.cols,
        height: gameState.board.height / gameState.labyrinth.rows
      }
    })
  }

  const drawLabyrinthFloor = () => {
    const { board, context } = gameState
    context?.fillRect(0, 0, board.width, board.height)
  }

  useEffect(() => {
    if (!canvasRef.current) return
    const context = canvasRef.current.getContext('2d')
    dispatch({ type: 'set_context', payload: context })
    dispatch({ type: 'set_board', payload: { width, height } })
    setCellDimension()
    drawLabyrinthFloor()
    dispatch({ type: 'set_loading', payload: false })
  }, [canvasRef.current])

  useEffect(() => {
    if (gameState.window !== Windows.playing) return
    handleDrawLevel()
  }, [gameState.window, gameState])

  useEffect(() => {
    if (gameState.window !== Windows.playing) return
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
  }, [gameState.player, gameState.cell, gameState.window])

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

    dispatch({ type: 'set_labyrinth', payload: nextLabyrinth })
    dispatch({ type: 'set_player', payload: newPlayer })
  }

  const setNextLevel = () => {
    const { level } = gameState
    const numberOfLeves = LEVELS.length
    const nextLevel = level + 1
    if (nextLevel >= numberOfLeves) return
    dispatch({ type: 'increase_level', payload: level })
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
    window,
    level: gameState.level
  }
}

export default useGame
