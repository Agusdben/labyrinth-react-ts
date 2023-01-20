import { useContext } from 'react'
import LEVELS from '../constants/levels'
import { LABYRINTH_STYLES } from '../constants/styles'
import { GameContext } from '../contexts/GameContext'
import { Dimension, GameState, LabyrinthPieces, Level } from '../types'

const useLabyrinth = () => {
  const { gameState, dispatch } = useContext(GameContext)
  const { labyrinth } = gameState

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

  const drawExit = (context: CanvasRenderingContext2D) => {
    const { cell } = gameState
    const { exit } = labyrinth
    context.fillStyle = LABYRINTH_STYLES.exitColor
    context.fillRect(
      exit.x * cell.width,
      exit.y * cell.height,
      cell.width,
      cell.height
    )
  }

  const drawFloor = (context: CanvasRenderingContext2D) => {
    const { board } = gameState
    context.fillStyle = LABYRINTH_STYLES.pathColor
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

  return {
    setCellDimension,
    setBoard,
    setLabyrinth,
    drawExit,
    drawFloor,
    drawWalls,
    drawLabyrinth
  }
}

export default useLabyrinth
