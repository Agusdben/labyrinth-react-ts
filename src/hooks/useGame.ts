import { useContext, useEffect, useRef } from 'react'
import { GameContext } from '../contexts/GameContext'
import Levels from '../pages/Levels'
import useLabyrinth from './useLabyrinth'
import useLevel from './useLevel'
import useOptions from './useOptions'
import usePlayer from './usePlayer'

const useGame = () => {
  const { gameState, dispatch } = useContext(GameContext)
  const labyrinth = useLabyrinth()
  const player = usePlayer()
  const options = useOptions()
  const level = useLevel()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const setContext = (context: CanvasRenderingContext2D) => {
    dispatch({ type: 'set_context', payload: context })
  }

  // labyrinth effects
  useEffect(() => {
    labyrinth.setBoard(options.resolution)
  }, [options.resolution])

  useEffect(() => {
    labyrinth.setCellDimension()
  }, [gameState.board, gameState.labyrinth])

  useEffect(() => {
    if (level.level === -1) return
    labyrinth.setLabyrinth()
  }, [level.level])

  useEffect(() => {
    if (!canvasRef.current) return
    const context = canvasRef.current.getContext('2d')
    if (!context) return
    setContext(context)
  }, [canvasRef.current])

  useEffect(() => {
    if (!gameState.context) return
    dispatch({ type: 'set_loading', payload: true })
    labyrinth.drawLabyrinth(gameState.context)
    dispatch({ type: 'set_loading', payload: false })
  }, [
    gameState.board,
    gameState.cell,
    gameState.labyrinth,
    gameState.context,
    gameState.player
  ])

  // player effects
  useEffect(() => {
    player.setPlayer()
  }, [gameState.cell, gameState.labyrinth])

  useEffect(() => {
    if (gameState.loading) return
    const { context } = gameState
    if (!context) return
    player.drawPlayer(context)
  }, [gameState.loading, gameState.player, gameState.cell, gameState.context])

  useEffect(() => {
    document.addEventListener('keydown', player.handleKeyDown)

    return () => document.removeEventListener('keydown', player.handleKeyDown)
  }, [gameState.player])

  return {
    canvasRef,
    loading: gameState.loading
  }
}

export default useGame
