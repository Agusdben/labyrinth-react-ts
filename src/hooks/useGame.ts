import { useContext, useEffect, useRef } from 'react'
import { GameContext } from '../contexts/GameContext'
import { LocalStorage } from '../types'
import useLabyrinth from './useLabyrinth'
import useOptions from './useOptions'
import usePlayer from './usePlayer'
import useSaveGame from './useSaveGame'

const useGame = () => {
  const { gameState, dispatch } = useContext(GameContext)
  const labyrinth = useLabyrinth()
  const player = usePlayer()
  const options = useOptions()
  const { saveGame } = useSaveGame()
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
    labyrinth.setLabyrinth()
  }, [gameState.level])

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

  useEffect(() => {
    if (gameState.loading) return
    if (!player.isInExit()) return

    saveGame(gameState.level)
  }, [gameState.player, gameState.loading])

  return {
    canvasRef,
    loading: gameState.loading
  }
}

export default useGame
