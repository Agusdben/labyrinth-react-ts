import { useContext, useEffect } from 'react'
import { GameContext } from '../contexts/GameContext'
import {
  Cords,
  GameState,
  LabyrinthPieces,
  PlayerMoveDirections
} from '../types'
import useOptions from './useOptions'

const usePlayer = () => {
  const { gameState, dispatch } = useContext(GameContext)
  const { playerOptions } = useOptions()
  const { player } = gameState

  const setPlayer = () => {
    const { cell, labyrinth } = gameState
    const playerWidth = cell.width / 1.2
    const playerHeight = cell.height / 1.2

    // offset because we need center player in cell
    const offset = {
      x: (cell.width - playerWidth) / 2,
      y: (cell.height - playerHeight) / 2
    }
    const newPlayer: GameState['player'] = {
      ...player,
      width: playerWidth,
      height: playerHeight,
      offset,
      x: labyrinth.playerSpawn.x,
      y: labyrinth.playerSpawn.y
    }

    dispatch({ type: 'set_player', payload: newPlayer })
  }

  const isPlayerInsideBoard = ({ x, y }: Cords): boolean => {
    const { board, cell } = gameState

    const canvasX = x * cell.width
    const canvasY = y * cell.height

    return (
      canvasX >= 0 &&
      canvasY >= 0 &&
      canvasX < board.width &&
      canvasY < board.height
    )
  }

  const drawPlayer = (context: CanvasRenderingContext2D) => {
    const { cell } = gameState

    context.fillStyle = playerOptions.color

    const playerX = cell.width * player.x + player.offset.x
    const playerY = cell.height * player.y + player.offset.y

    context.fillRect(playerX, playerY, player.width, player.height)
  }

  const playerMoveUp = () => {
    const { player, labyrinth } = gameState
    const { map } = labyrinth
    const { x: playerX, y: playerY } = player

    const nextYpostion = playerY - 1

    const itsWallUp = map[nextYpostion][playerX] === LabyrinthPieces.wall

    if (itsWallUp || !isPlayerInsideBoard({ x: playerX, y: nextYpostion }))
      return

    const newPlayer = {
      ...player,
      y: nextYpostion
    }

    map[playerY][playerX] = LabyrinthPieces.path
    map[nextYpostion][playerX] = LabyrinthPieces.player

    dispatch({ type: 'set_player', payload: newPlayer })
  }

  const playerMoveLeft = () => {
    const { player, labyrinth } = gameState
    const { map } = labyrinth
    const { x: playerX, y: playerY } = player

    const nextXposition = playerX - 1
    const itsWallLeft = map[playerY][nextXposition] === LabyrinthPieces.wall
    if (itsWallLeft || !isPlayerInsideBoard({ x: nextXposition, y: playerY }))
      return

    map[playerY][playerX] = LabyrinthPieces.path
    map[playerY][nextXposition] = LabyrinthPieces.player

    const newPlayer = {
      ...player,
      x: nextXposition
    }

    dispatch({ type: 'set_player', payload: newPlayer })
  }

  const playerMoveDown = () => {
    const { player, labyrinth } = gameState
    const { map } = labyrinth
    const { x: playerX, y: playerY } = player

    const nextYpostion = playerY + 1
    const itsWallDown = map[nextYpostion][playerX] === LabyrinthPieces.wall
    if (itsWallDown || !isPlayerInsideBoard({ x: playerX, y: nextYpostion }))
      return

    const newPlayer = {
      ...player,
      y: nextYpostion
    }

    map[playerY][playerX] = LabyrinthPieces.path
    map[nextYpostion][playerX] = LabyrinthPieces.player
    dispatch({ type: 'set_player', payload: newPlayer })
  }

  const playerMoveRight = () => {
    const { labyrinth } = gameState
    const { map } = labyrinth

    const nextXposition = player.x + 1
    const itsWallRight = map[player.y][nextXposition] === LabyrinthPieces.wall
    if (itsWallRight || !isPlayerInsideBoard({ x: nextXposition, y: player.y }))
      return

    map[player.y][player.x] = LabyrinthPieces.path
    map[player.y][nextXposition] = LabyrinthPieces.player

    const newPlayer = {
      ...player,
      x: nextXposition
    }

    dispatch({ type: 'set_player', payload: newPlayer })
  }

  const handlePlayerMove = (direction: string) => {
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

  const handleKeyDown = (e: KeyboardEvent) => {
    handlePlayerMove(e.key)
  }

  const isInExit = () => {
    const { labyrinth, loading } = gameState
    if (loading) return false
    const { exit } = labyrinth
    return player.x === exit.x && player.y === exit.y
  }

  return {
    handlePlayerMove,
    setPlayer,
    drawPlayer,
    handleKeyDown,
    isInExit,
    player
  }
}

export default usePlayer
