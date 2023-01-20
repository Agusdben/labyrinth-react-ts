import { useContext, useEffect } from 'react'
import { GameContext } from '../contexts/GameContext'
import { GameState, LabyrinthPieces, PlayerMoveDirections } from '../types'

const usePlayer = () => {
  const { gameState, dispatch } = useContext(GameContext)
  const { player } = gameState

  const setPlayer = () => {
    const { cell, labyrinth } = gameState
    const playerWidth = cell.width / 2
    const playerHeight = cell.height / 2

    // offset becose we need center player in cell
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

  const drawPlayer = (context: CanvasRenderingContext2D) => {
    const { cell } = gameState

    context.fillStyle = player.color

    const playerX = cell.width * player.x + player.offset.x
    const playerY = cell.height * player.y + player.offset.y

    context.fillRect(playerX, playerY, player.width, player.height)
  }

  const playerMoveUp = () => {
    const { player, labyrinth, cell } = gameState
    const { map } = labyrinth
    const { x: playerX, y: playerY } = player

    const nextYpostion = playerY - 1

    const itsWallUp = map[nextYpostion][playerX] === LabyrinthPieces.wall

    if (itsWallUp) return

    const newPlayer = {
      ...player,
      y: nextYpostion
    }

    map[playerY][playerX] = LabyrinthPieces.path
    map[nextYpostion][playerX] = LabyrinthPieces.player

    dispatch({ type: 'set_player', payload: newPlayer })
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

    dispatch({ type: 'set_player', payload: newPlayer })
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
    dispatch({ type: 'set_player', payload: newPlayer })
  }

  const playerMoveRight = () => {
    const { labyrinth } = gameState
    const { map } = labyrinth

    const nextXposition = player.x + 1

    if (map[player.y][nextXposition] === LabyrinthPieces.wall) return

    map[player.y][player.x] = LabyrinthPieces.path
    map[player.y][nextXposition] = LabyrinthPieces.player

    const newPlayer = {
      ...player,
      x: nextXposition
    }

    dispatch({ type: 'set_player', payload: newPlayer })
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

  return {
    handlePlayerMove,
    setPlayer,
    drawPlayer
  }
}

export default usePlayer
