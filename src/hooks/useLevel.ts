import { useContext } from 'react'
import { GameContext } from '../contexts/GameContext'

const useLevel = () => {
  const { dispatch, gameState } = useContext(GameContext)

  const setLevel = (l: number) => {
    dispatch({ type: 'set_level', payload: l - 1 })
  }

  return {
    setLevel,
    level: gameState.level
  }
}

export default useLevel
