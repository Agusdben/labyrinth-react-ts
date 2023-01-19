import { useContext, useEffect, useRef } from 'react'
import LEVELS from '../constants/levels'
import { GameContext } from '../contexts/GameContext'
import { Dimension, GameState, LabyrinthPieces, Level } from '../types'

const useLabyrinth = ({ width, height }: Dimension) => {
  const { gameState, dispatch } = useContext(GameContext)
  const { labyrinth } = gameState
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const setCellDimension = () => {
    dispatch({
      type: 'set_cell',
      payload: {
        width: gameState.board.width / gameState.labyrinth.cols,
        height: gameState.board.height / gameState.labyrinth.rows
      }
    })
  }

  const setBoard = ({ width, height }: Dimension) => {
    dispatch({ type: 'set_board', payload: { width, height } })
  }

  useEffect(() => {
    setBoard({ width, height }) // useLabyrinth width and height params
  }, [width, height])

  useEffect(() => {
    setCellDimension()
  }, [gameState.board, gameState.labyrinth])

  const setLabyrinth = () => {
    const { level } = gameState
    const newLevel: Level = LEVELS[level] // minus one becouse array first index is 0 and first level is 1

    const newLabyrinth: GameState['labyrinth'] = {
      ...labyrinth,
      cols: newLevel.map[0].length,
      rows: newLevel.map.length,
      exit: newLevel.exit,
      map: newLevel.map,
      playerSpawn: newLevel.playerSpawn
    }

    dispatch({ type: 'set_labyrinth', payload: newLabyrinth })
  }

  useEffect(() => {
    setLabyrinth()
  }, [gameState.level])

  const setContext = (context: CanvasRenderingContext2D) => {
    dispatch({ type: 'set_context', payload: context })
  }

  useEffect(() => {
    if (!canvasRef.current) return
    const context = canvasRef.current.getContext('2d')
    if (!context) return
    setContext(context)
  }, [canvasRef.current])

  const drawExit = (context: CanvasRenderingContext2D) => {
    const { cell } = gameState
    const { exit, exitColor } = labyrinth
    context.fillStyle = exitColor
    context.fillRect(
      exit.x * cell.width,
      exit.y * cell.height,
      cell.width,
      cell.height
    )
  }

  const drawFloor = (context: CanvasRenderingContext2D) => {
    const { board } = gameState
    context.fillStyle = labyrinth.pathColor
    context.fillRect(0, 0, board.width, board.height)
  }

  const drawWalls = (context: CanvasRenderingContext2D) => {
    const { cell } = gameState
    const { map, rows, cols, wallColor } = labyrinth

    context.fillStyle = wallColor

    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        if (map[row][col] === LabyrinthPieces.wall) {
          context.fillRect(
            col * cell.width,
            row * cell.height,
            cell.width,
            cell.height
          )
        }
      }
    }
  }

  const drawLabyrinth = (context: CanvasRenderingContext2D) => {
    drawFloor(context)
    drawWalls(context)
    drawExit(context)
  }

  useEffect(() => {
    if (!gameState.context) return
    console.log('dibuje')
    dispatch({ type: 'set_loading', payload: true })
    drawLabyrinth(gameState.context)
    dispatch({ type: 'set_loading', payload: false })
  }, [
    gameState.board,
    gameState.cell,
    gameState.labyrinth,
    gameState.level,
    gameState.context,
    gameState.player
  ])

  return {
    canvasRef,
    drawFloor
  }
}

export default useLabyrinth
